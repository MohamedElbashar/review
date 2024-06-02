export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [{ __ssdGlobalMiddlewares__: 'cors' }],
    post: [],
    sequences: {},
  },
  ids: {
    client_id: 'process.env.IDS_CLIENT',
    client_secret: 'process.env.IDS_SECRET',
    issuerURL: 'process.env.IDS_URL',
    enabled: true,
  },
};
