export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { __ssdGlobalMiddlewares__: 'sd_G5Id0SF3IYRD9qsu' },
      { __ssdGlobalMiddlewares__: 'sd_Tp9jNbUvUZ1kJnAn' },
    ],
    post: [],
    sequences: {
      user_auth: { pre: [{ UserAuth: 'ValidateUserSession' }], post: [] },
      validate_otp: { pre: [{ UserAuth: 'checkOtpVerified' }], post: [] },
    },
  },
};
