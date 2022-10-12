import { useState } from 'react'

import CartAdd from '../../../../assets/button-adicionar-no-carrinho.svg'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  BannerContent,
  BuyArea,
  CoffeeContent,
  CoffeeImg,
  Content,
  Price,
  Container,
} from './style'

export interface Coffee {
  id: number
  image: string
  title: string
  subtitle: string
  type: string
  typeTwo?: string
  typeThere?: string
}

interface CoffeeProps {
  coffee: Coffee
}

export const CoffeeBanner = ({ coffee }: CoffeeProps) => {
  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => {
    setQuantity((state) => state + 1)
  }
  const handleDecrease = () => {
    setQuantity((state) => Math.max(state - 1, 1))
  }

  const { addCoffeeToCart } = useCart()
  const handleAddToCart = () => {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const formattedPrice = formatMoney(coffee.price)
  return (
    <Container>
      <BannerContent>
        <Content>
          <CoffeeContent>
            <CoffeeImg>
              <img src={coffee.image} alt="" />
            </CoffeeImg>
            <span>
              {coffee.type}
              {/* <span>{coffee.typeTwo}</span>
              <span>{coffee.typeThere}</span> */}
            </span>
            <h2>{coffee.title}</h2>
            <p>{coffee.subtitle}</p>
          </CoffeeContent>
          <BuyArea>
            <Price>
              <span>
                <strong>R$</strong>
                {formattedPrice}
              </span>
            </Price>
            <div>
              <span onClick={handleDecrease}>-</span>
              {quantity}
              <span onClick={handleIncrease}>+</span>
            </div>
            <img src={CartAdd} onClick={handleAddToCart} />
          </BuyArea>
        </Content>
      </BannerContent>
    </Container>
  )
}
