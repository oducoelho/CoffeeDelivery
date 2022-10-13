import Icon from '../../../../assets/icon-checkout.svg'
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
      <PayContainer />
    </Component>
  )
}
