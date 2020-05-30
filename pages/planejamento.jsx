import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Planejamentos } from '../src/components/Planejamentos'

const PlanejamentoPage = () => {
  const [planejamentos, setPlanejamentos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPlanejamentos(idUser) {
      const { data } = await axios.get('/api/planejamentos', { params: { customer_id: idUser } })
      setPlanejamentos(data.planejamentos)
      setLoading(false)
    }

    const idUser = localStorage.getItem('USER_ID')

    if (idUser != null) {
      fetchPlanejamentos(idUser)
    } else {
      setLoading(false)
    }
  }, [])

  return <Planejamentos planejamentos={planejamentos} loading={loading} />
}

export default PlanejamentoPage
