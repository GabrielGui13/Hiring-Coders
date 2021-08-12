

// DESCOMENTAR IMPORT DO USEPRODUCT E O PROPRIO HOOK


import React, { useState } from 'react'
import { TimeSplit } from './typings/global' //tipagens globais em pasta local
import { tick, getTwoDaysFromNow } from './utils/time' //funcao de um script local
import { useCssHandles } from 'vtex.css-handles' //deve importar em outras aplicacoes
import { useQuery } from 'react-apollo' //query graphql
import useProduct from 'vtex.product-context/useProduct' //erro normal
import productReleaseDate from './graphql/productReleaseDate.graphql' //data do produto

/* interface CountdownProps {
  targetDate: string //props vindo do site editor
} */
const DEFAULT_TARGET_DATE = getTwoDaysFromNow() //data padrao caso o props esteja vazio, 48 horas a frente
const CSS_HANDLES = ['countdown'] //forma de receber css



const Countdown: StorefrontFunctionComponent/* <CountdownProps> */ = ({}) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({ //00 eh o tempo padrao
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  const { product } = useProduct() //para nos dar a informação sobre o slug do produto atual. Os dados de produto podem ser encontrados aqui
  const { data, loading, error } = useQuery(productReleaseDate, { //para fazer a query que retornará o dado que descrevemos
    variables: {
      slug: product?.linkText //linkText será igual a 'red-analogic-coffee-and-tea-machine', por exemplo, quando o seu componente for renderizado na página deste produto.
    },
    ssr: false
  })

  const handles = useCssHandles(CSS_HANDLES)

  tick(data?.product?.releaseDate || DEFAULT_TARGET_DATE, setTime) //funcao de alteracao da contagem

  if (!product) {
    return (
      <div>
        <span>There is no product context.</span>
      </div>
    )
  }
  if (loading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    )
  }
  if (error) {
    return (
      <div>
        <span>Erro!</span>
      </div>
    )  
  }

  return (
    <div className={`${handles.countdown} c-muted-1 db tc`}>
      <h1>{`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}</h1> 
    </div>
  ) //horario na tela
}

Countdown.schema = { //schemas de como cada bloco eh mostrado no site editor
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    title: {
      title: 'I am a title',
      type: 'string',
      default: null,
    },
    targetDate: {
      title: 'Final date',
      description: 'Final date used in the countdown',
      type: 'string',
      default: null,
    },
  },
}

export default Countdown