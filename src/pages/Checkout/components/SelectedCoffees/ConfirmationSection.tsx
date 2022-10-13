import { Button } from '../../../../components/Button'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'

const DELIVERY_PRICE = 3.5

export const ConfirmationSection = () => {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)
  return (
    <div>
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
        <Button
          text="Confirmar Pedido"
          disabled={cartQuantity <= 0}
          type="submit"
        />
      </nav>
    </div>
  )
}
