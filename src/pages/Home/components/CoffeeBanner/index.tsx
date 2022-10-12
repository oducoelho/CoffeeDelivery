import { useState } from 'react'

import CartAdd from '../../../../assets/button-adicionar-no-carrinho.svg'
import { useCart } from '../../../../hooks/useCart'
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
  const [count, setCount] = useState(1)
  const { addCoffeeToCart } = useCart()
  const handleAddToCart = () => {
    const coffeeToAdd = {
      ...coffee,
      quantity: 1,
    }
    addCoffeeToCart(coffeeToAdd)
  }

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
                <strong>R$</strong>9,90
              </span>
            </Price>
            <div>
              <span onClick={() => setCount((c) => Math.max(c - 1, 1))}>-</span>
              {count}
              <span onClick={() => setCount(count + 1)}>+</span>
            </div>
            <img src={CartAdd} onClick={handleAddToCart} />
          </BuyArea>
        </Content>
      </BannerContent>
    </Container>
  )
}
