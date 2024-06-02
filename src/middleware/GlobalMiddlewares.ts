// _neu_generated_code__dont_modify_directly_

//append_imports_start

import * as cors from 'cors'; //_splitter_
//append_imports_end
export let Middlewares = {
  cors: () => {
    let corsOptions = {
      origin: ['http://localhost:4200'],

      credentials: true,

      preflightContinue: false,
    };
    return cors(corsOptions);
  },
  //appendnew_flow
};
