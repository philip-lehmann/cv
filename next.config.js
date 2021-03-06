/* global require, module, __dirname */
const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.alias.components = path.resolve(__dirname, 'components')
    config.resolve.alias.helpers = path.resolve(__dirname, 'helpers')

    // Important: return the modified config
    return config
  }
}
