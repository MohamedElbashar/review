export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { __ssdGlobalMiddlewares__: 'sd_1hGeifY9mjfZlLVV' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: {
      authorized_apis: { pre: [{ ca_auth: 'otp_check' }], post: [] },
    },
  },
};
