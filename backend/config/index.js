module.exports = {
  app: {
    host: 'localhost',
    websocketPort: 3100,
    url: process.env.APP_URL,
    port: process.env.APP_PORT,
    environment: process.env.NODE_ENV,
  },

  mongodbConf: {
    url: `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`,
    options: {
      connectTimeoutMS: 30000,
    },
  },

  redisConf: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },

  jwtConf: {
    secret: process.env.JWT_SECRET,
    lifetime: (31 * 24 * 60 * 60 * 1000), // 1 month
  },
};
