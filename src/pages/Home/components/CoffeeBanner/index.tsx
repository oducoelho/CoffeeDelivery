import { useState } from "react"

import CartAdd from "../../../../assets/button-adicionar-no-carrinho.svg"
import coffee from "../../../../assets/expresso-tradicional.svg"
import { BannerContent, BuyArea, CoffeeContent, CoffeeImg, Content, Price } from "./style"

interface CoffeeBannerProps{
  id: number;
  image: ,
  title: string;
  subtitle: string;
  type: string;
  typeTwo?: string;
  typeThere?: string;
}

export const CoffeeBanner = (props: CoffeeBannerProps) => {
  const [count, setCount] = useState(0)

  return (
    <BannerContent>
      <Content>
        <CoffeeContent>
          <CoffeeImg>
            <img src={props.image} alt="" />
          </CoffeeImg>
          <span>{props.type}</span>
          <h2>{props.title}</h2>
          <p>{props.subtitle}</p>
        </CoffeeContent>

        <BuyArea> 
          <Price>
            <span><strong>R$</strong>9,90</span>
          </Price>
          <div>
            <span onClick={() => setCount(c => Math.max(c - 1, 0))}>-</span>
            {count}
            <span onClick={() => setCount(count + 1) }>+</span>
          </div>
          <img src={CartAdd} />
        </BuyArea>
      </Content>
    </BannerContent>
  )
}
