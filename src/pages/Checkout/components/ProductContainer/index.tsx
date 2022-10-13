import trash from '../../../../assets/trash.svg'

import { Trash } from 'phosphor-react'
import { Buttons, BuyConainer, Container, Counter, RemoveButton } from './styled'
import { CartItem } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

interface CoffeCartCardProps {
  coffee: CartItem
}

export const ProductContainer = ({ coffee }: CoffeCartCardProps) => {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  const handleIncrease = () => {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  const handleDecrease = () => {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  const handleRemove = () => {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity

  const formattedPrice = formatMoney(coffeeTotal)
  return (
    <div>
      <Container>
        <img src={coffee.image} alt="" />
        <BuyConainer>
          <p>{coffee.title}</p>
          <Buttons>
            <div>
              <span onClick={handleDecrease}>-</span>
              {coffee.quantity}
              <span onClick={handleIncrease}>+</span>
            </div>
            <RemoveButton onClick={handleRemove}>
              <Trash />
              REMOVER
            </RemoveButton>
          </Buttons>
        </BuyConainer>
        <p>R$ {formattedPrice}</p>
      </Container>
    </div>
  )
}
