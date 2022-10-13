import { useCart } from '../../../../hooks/useCart'
import { ProductContainer } from '../ProductContainer'
import { ConfirmationSection } from './ConfirmationSection'
import { CheckoutContainer, StyledCoffees } from './styled'

export const SelectedCoffees = () => {
  const { cartItems } = useCart()
  return (
    <StyledCoffees>
      <h1>Cafés selecionados</h1>
      <CheckoutContainer>
        {cartItems.map((item) => (
          <ProductContainer key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </CheckoutContainer>
    </StyledCoffees>
  )
}
