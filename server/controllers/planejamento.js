const { PATHS } = require('../constants/paths')
const { planejamentosService } = require('../services/planejamentos')

class PlanejamentosController {
  async getPlanejamentos(req, res) {
    try {
      const customer_id = req.param('customer_id')

      if (!customer_id) {
        res.status(400).json({
          message: 'Parametro `customer_id` não enviado',
        })
      }

      const planejamentos = await planejamentosService.get(customer_id)

      return res.json({
        planejamentos,
      })
    } catch (ex) {
      console.log(ex)

      res.status(500).json({
        message: 'Ocorreu um erro inesperado',
      })
    }
  }
}

const { PLANEJAMENTOS } = PATHS.CONTROLLER

module.exports = (server) => {
  const controller = new PlanejamentosController()

  server.get(PLANEJAMENTOS, controller.getPlanejamentos)
}
