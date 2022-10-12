import IconMoney from '../../../../assets/icon-dinheiro.svg'
import MoneyIcon from '../../../../assets/dinheiro.svg'
import CredicCard from '../../../../assets/cartao-de-credito.svg'
import DebitCard from '../../../../assets/cartao-de-debito.svg'

import { OptionsContainer, OptionsOfPay } from './styled'

export const PayContainer = () => {
  return (
    <OptionsContainer>
      <h3>
        {' '}
        <img src={IconMoney} alt="" /> Pagamento
      </h3>
      <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      <OptionsOfPay>
        <div>
          {' '}
          <img src={MoneyIcon} alt="" /> CARTÃO DE CRÉDITO
        </div>
        <div>
          {' '}
          <img src={CredicCard} alt="" /> CARTÃO DE DÉBITO
        </div>
        <div>
          {' '}
          <img src={DebitCard} alt="" /> DINHEIRO
        </div>
      </OptionsOfPay>
    </OptionsContainer>
  )
}
