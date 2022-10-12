import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import { ProductContainer } from '../ProductContainer'
import { CheckoutContainer, StyledCoffees } from './styled'

const DELIVERY_PRICE = 3.5

export const SelectedCoffees = () => {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <StyledCoffees>
      <h1>Cafés selecionados</h1>
      <CheckoutContainer>
        {cartItems.map((item) => (
          <ProductContainer key={item.id} coffee={item} />
        ))}

        <nav>
          <span>
            Total de itens <strong>R$ {formattedItemsTotal}</strong>
          </span>{' '}
          <br />
          <span>
            Entrega <strong>R$ {formattedDeliveryPrice}</strong>
          </span>
          <p>
            Total <strong>R$ {formattedCartTotal}</strong>
          </p>
          <button disabled={cartQuantity <= 0}>CONFIRMAR PEDIDO</button>
        </nav>
      </CheckoutContainer>
    </StyledCoffees>
  )
}
