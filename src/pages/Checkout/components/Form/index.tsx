import Icon from '../../../../assets/icon-checkout.svg'
import IconMoney from '../../../../assets/icon-dinheiro.svg'

import { FormContainer, Component } from './styled'

import { AddressForm } from './AddressForm'
import { PayContainer } from './PaymentMethod'

export const RequestCard = () => {
  return (
    <Component>
      <h1>Complete o seu pedido</h1>
      <FormContainer>
        <h3>
          {' '}
          <img src={Icon} alt="" /> Endereço de Entrega
        </h3>
        <p>Informe o endereço onde deseja receber seu pedido</p>
        <AddressForm />
      </FormContainer>
      <FormContainer>
        <h3>
          {' '}
          <img src={IconMoney} alt="" /> Pagamento
        </h3>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        <PayContainer />
      </FormContainer>
    </Component>
  )
}
