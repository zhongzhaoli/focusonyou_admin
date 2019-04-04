'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
  NODE_ENV: '"production"',
  API_URL: '"https://api.yuntunwj.com/focusonyou/public"',
  WEB_URL: '"http://focus_admin.yuntunwj.com/#/"'
}
