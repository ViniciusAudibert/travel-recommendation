import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'

import { Planejamentos } from '../src/components/Planejamentos'
import { DynatraceCart } from '../src/assets/js/dyna-cart'

const PlanejamentoPage = () => {
  const [planejamentos, setPlanejamentos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPlanejamentos(idUser) {
      const { data } = await axios.get('/api/test', { params: { customer_id: idUser } })
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

  function click1() {
    throw new Error('botão bloqueado')
  }

  function click2() {
    const teste = {}

    teste.jps.some()
  }

  return (
    <>
      <Head>
        <DynatraceCart />
      </Head>
      {planejamentos === 1 && <Planejamentos planejamentos={planejamentos} loading={loading} />}
      Teste Cart
      <Link href="/planejamento">
        <a>Cart</a>
      </Link>
      <button onClick={click1}>Clique aqui 1</button>
      <button onClick={click2}>Clique aqui 2</button>
    </>
  )
}

export default PlanejamentoPage
