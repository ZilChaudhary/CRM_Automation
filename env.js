// env.js
require('dotenv').config();

module.exports = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  loginUrl: process.env.LOGIN_URL,
  leadsUrl: process.env.LEADS_URL,
};
