const path = require('path')
const ROOT = path.resolve(__dirname, '..')

module.exports.PATHS = {
  CONTROLLER: {
    MAIN_FOLDER: path.resolve(ROOT, 'controllers'),
    WELCOME: '/api/messages/welcome',
    TALK: '/api/messages/talk',
    PLANEJAMENTOS: '/api/planejamentos',
    IMAGE_GOOGLE_ID: '/api/image/googleId',
  },
}
