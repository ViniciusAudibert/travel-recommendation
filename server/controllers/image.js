const { PATHS } = require('../constants/paths')

class ImageController {
  async getImageByGoogleId(req, res) {
    try {
      const imgId = req.param('id')

      // const responseData = await googleClient.placePhoto({ params: { photoreference: imgId, maxwidth: 500, key: process.env.GOOGLE_MAPS_API_KEY } })

      res.writeHead(302, {
        Location: `https://maps.googleapis.com/maps/api/place/photo?key=${process.env.GOOGLE_MAPS_API_KEY}&photoreference=${imgId}&maxwidth=500`,
      })

      res.end()
    } catch (ex) {
      console.log(ex)

      res.status(500).json({
        message: 'Ocorreu um erro inesperado',
      })
    }
  }
}

const { IMAGE_GOOGLE_ID } = PATHS.CONTROLLER

module.exports = (server) => {
  const controller = new ImageController()

  server.get(IMAGE_GOOGLE_ID, controller.getImageByGoogleId)
}
