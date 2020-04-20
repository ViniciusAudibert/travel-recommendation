const path = require('path')
const fs = require('fs')
const { PATHS } = require('../constants/paths')

module.exports.controllerConfigs = (server) => {
  const controlllers = fs.readdirSync(PATHS.CONTROLLER.MAIN_FOLDER)

  controlllers.forEach((controller) => {
    require(path.resolve(PATHS.CONTROLLER.MAIN_FOLDER, controller))(server)
  })
}
