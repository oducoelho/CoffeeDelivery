import icon from '../../assets/icon-success.svg'
import time from '../../assets/time-success.svg'
import money from '../../assets/money-success.svg'
import moto from '../../assets/moto-success.svg'

import { Img, CardContainer, Items, SuccessContainer, Title } from './styled'

export const Success = () => {
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
              Entrega em Rua João Daniel Martinelli, 102 <br />
              Farrapos - Porto Alegre, RS
            </span>
            <span>
              <img src={time} alt="" />
              Previsão de entrega <br /> 20 min - 30 min
            </span>
            <span>
              <img src={money} alt="" />
              Pagamento na entrega <br /> Cartão de Crédito
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
