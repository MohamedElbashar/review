FROM oraclelinux:7-slim as ora-builder

ARG release=19
ARG update=5

RUN yum -y install oracle-release-el7
RUN yum -y install oracle-instantclient${release}.${update}-basiclite

RUN rm -rf /usr/lib/oracle/${release}.${update}/client64/bin
WORKDIR /usr/lib/oracle/${release}.${update}/client64/lib/
RUN rm -rf *jdbc* *occi* *mysql* *jar

FROM node:14.16.0-alpine AS BUILD_IMAGE

WORKDIR /opt/api

COPY package.json .
RUN npm config set registry https://nexus.neutrinos.co/repository/neutrinos-store-registry/
RUN npm install

COPY . .
RUN npx tsc -p ./tsconfig.json && npm run copy-public

EXPOSE 8080

FROM node:14.16.0-buster-slim

WORKDIR /home/api
COPY --from=BUILD_IMAGE /opt/api .

# Copy the Instant Client libraries, licenses and config file from the previous image
COPY --from=ora-builder /usr/lib/oracle /usr/lib/oracle
COPY --from=ora-builder /usr/share/oracle /usr/share/oracle
COPY --from=ora-builder /etc/ld.so.conf.d/oracle-instantclient.conf /etc/ld.so.conf.d/oracle-instantclient.conf

RUN apt-get update && apt-get -y upgrade && apt-get -y dist-upgrade && apt-get install -y libaio1 && \
    apt-get -y autoremove && apt-get -y clean && \
    ldconfig

CMD ["npm", "run", "node-prod-trace"]