const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

require('dotenv').config();

const evnconfig = {
  publicRuntimeConfig: {
    APP_API_KEY: process.env.APP_API_KEY,
    APP_AUTH_DOMAIN: process.env.APP_AUTH_DOMAIN,
    APP_DATABASE_URL: process.env.APP_DATABASE_URL,
    APP_PROJECT_ID: process.env.APP_PROJECT_ID,
    APP_STOREGE_BUCKET: process.env.APP_STOREGE_BUCKET,
    APP_MESSAGING_SENDER: process.env.APP_MESSAGING_SENDER,
  },
  serverRuntimeConfig: {
    JWT_SECRET: process.env.JWT_SECRET,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  },
};

module.exports = withPlugins([[withCSS]], evnconfig);
