import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Planejamentos } from '../src/components/Planejamentos'

const PlanejamentoPage = () => {
  const [planejamentos, setPlanejamentos] = useState([])

  useEffect(() => {
    async function fetchPlanejamentos(idUser) {
      const { data } = await axios.get('/api/planejamentos', { params: { customer_id: idUser } })
      setPlanejamentos(data.planejamentos)
    }

    const idUser = localStorage.getItem('USER_ID')

    if (idUser != null) {
      fetchPlanejamentos(idUser)
    } else {
      alert('Nenhum local encontrado para esse usuário')
    }
  }, [])

  return <Planejamentos planejamentos={planejamentos} />
}

export default PlanejamentoPage
