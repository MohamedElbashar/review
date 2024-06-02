export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [{ __ssdGlobalMiddlewares__: 'sd_Tp9jNbUvUZ1kJnAn' }],
    post: [],
    sequences: {
      serviceAccAuthorizedAPIs: {
        pre: [{ middleware_flow: 'authorize' }],
        post: [],
      },
      serviceAccAuthSadad: {
        pre: [{ middleware_flow: 'sadad_authorize' }],
        post: [],
      },
    },
  },
};
