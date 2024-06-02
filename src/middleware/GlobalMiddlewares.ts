// _neu_generated_code__dont_modify_directly_

//append_imports_start

import * as cors from 'cors'; //_splitter_
import * as expressSession from 'express-session'; //_splitter_
import { getConnection } from '../typeormUtils'; //_splitter_
import { TypeormStore } from '../utils/ndefault-session/Session/SessionStore'; //_splitter_
//append_imports_end
export let Middlewares = {
  sd_Tp9jNbUvUZ1kJnAn: () => {
    let corsOptions = {
      origin: [
        'http://localhost:4200',
        'https://b2c.alrajhitakaful.com',
        'https://b2c-sit.alrajhitakaful.com',
        'https://b2c-uat.alrajhitakaful.com',
        'https://b2c-dev2.alrajhitakaful.com',
        'https://api-uat.alrajhitakaful.com:9446',
        'https://api-sit.alrajhitakaful.com:9445',
        'https://api.alrajhitakaful.com',
        'https://b2c-dev.alrajhitakaful.com'
      ],

      credentials: true,

      preflightContinue: false,
    };
    return cors(corsOptions);
  },
  sd_G5Id0SF3IYRD9qsu: () => {
    let sess: expressSession.SessionOptions;
    if (process.env.ENV == "LOCAL" || process.env.ENV == "DEV") {

      sess = {
        cookie: {
          secure: false,
          httpOnly: false,
          maxAge: Number(process.env.SEESSION_MAX_AGE || 60 * 60 * 1000),
          sameSite: "lax",
        },
        name: 'connect.b2c.sid',
        proxy: false,

        resave: false,

        rolling: false,

        saveUninitialized: false,

        secret: 'aASlkjuDCP',

        unset: 'keep',

        store: new TypeormStore({
          repository: getConnection('oracle-art').getRepository('Session'),
        }),
      }
    }
    else{
      sess = {
        cookie: {
          domain: ".alrajhitakaful.com",
          secure: true,
          httpOnly: false,
          maxAge: Number(process.env.SEESSION_MAX_AGE || 60 * 60 * 1000),
          sameSite: "none",
        },
        name: 'connect.b2c.sid',
        proxy: true,
        resave: false,
        rolling: false,
        saveUninitialized: false,
        secret: "aASlkjuDCP",
        unset: "keep",
        store: new TypeormStore({
          repository: getConnection("oracle-art").getRepository("Session"),
        }),
      };
    }
    return expressSession(sess);
  },
  //appendnew_flow
};
