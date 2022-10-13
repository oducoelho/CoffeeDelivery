import icon from '../../assets/icon-success.svg'
import time from '../../assets/time-success.svg'
import money from '../../assets/money-success.svg'
import moto from '../../assets/moto-success.svg'
import { Img, CardContainer, Items, SuccessContainer, Title } from './styled'
import { useLocation, useNavigate } from 'react-router-dom'
import { paymentMethods } from '../Checkout/components/Form/PaymentMethod'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export const Success = () => {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>
  return (
    <SuccessContainer>
      <div>
        <Title>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Title>
        <CardContainer>
          <Items>
            <span>
              <img src={icon} alt="" />
              Entrega em {state.street}, {state.number} <br />
              {state.district} - {state.city}, {state.uf}
            </span>
            <span>
              <img src={time} alt="" />
              Previsão de entrega <br /> 20 min - 30 min
            </span>
            <span>
              <img src={money} alt="" />
              Pagamento na entrega <br />{' '}
              {paymentMethods[state.paymentMethod].label}
            </span>
          </Items>
        </CardContainer>
      </div>
      <Img>
        <img src={moto} alt="" />
      </Img>
    </SuccessContainer>
  )
}
