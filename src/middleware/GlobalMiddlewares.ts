// _neu_generated_code__dont_modify_directly_

//append_imports_start

import * as cors from 'cors'; //_splitter_
import * as expressSession from 'express-session'; //_splitter_
import { getConnection } from '../typeormUtils'; //_splitter_
import { TypeormStore } from '../utils/ndefault-session/Session/SessionStore'; //_splitter_
//append_imports_end
export let Middlewares = {
  sd_1hGeifY9mjfZlLVV: () => {
    let sess: expressSession.SessionOptions;
    if (process.env.ENV == "LOCAL" || process.env.ENV == "DEV") {
      sess = {
        cookie: {
          secure: false,
          httpOnly: false,
          maxAge:  60 * 60 * 1000,
          sameSite: "lax",
        },
        name: 'connect.ca.sid',
        proxy: false,
        resave: false,
        rolling: false,
        saveUninitialized: false,
        secret: "aASlkjuOLS",
        unset: "keep",
        store: new TypeormStore({
          repository: getConnection("oracle-art").getRepository("Session"),
        }),
      };
    } else {
      sess = {
        cookie: {
          domain: ".alrajhitakaful.com",
          secure: true,
          httpOnly: false,
          maxAge:  60 * 60 * 1000,
          sameSite: "none",
        },
        name: 'connect.ca.sid',
        proxy: true,
        resave: false,
        rolling: false,
        saveUninitialized: false,
        secret: "aASlkjuOLS",
        unset: "keep",
        store: new TypeormStore({
          repository: getConnection("oracle-art").getRepository("Session"),
        }),
      };
    }
    // console.log(sess.cookie);
    return expressSession(sess);
  },
  cors: () => {
    let corsOptions = {
      origin: [
        'http://localhost:4200',
        'https://dev-bp.alrajhitakaful.com',
        'https://sit-sp.alrajhitakaful.com',
        'https://uat-sp.alrajhitakaful.com',
        'https://salesportal.alrajhitakaful.com',
        'https://api-uat.alrajhitakaful.com:9446',
        'https://api-sit.alrajhitakaful.com:9445',
        'https://api-dev.alrajhitakaful.com:9444',
        'https://api.alrajhitakaful.com',
        'https://apiociuat.alrajhitakaful.com',
        'https://apioceuat.alrajhitakaful.com',
        'https://apis.alrajhitakaful.com',
        'https://apisi.alrajhitakaful.com'       
      ],

      credentials: true,

      preflightContinue: false,
    };
    return cors(corsOptions);
  },
  //appendnew_flow
};
