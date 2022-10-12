import trash from '../../../../assets/trash.svg'

import { useState } from 'react'
import {
  Buttons,
  BuyConainer,
  CheckoutContainer,
  ProductContainer,
  RemoveButton,
  StyledCoffees,
} from './styled'

interface CheckoutCoffeesProps {
  id: number
  image: string
  title: string
}

export const SelectedCoffees = (props: CheckoutCoffeesProps) => {
  const [count, setCount] = useState(0)
  return (
    <StyledCoffees>
      <h1>Cafés selecionados</h1>
      <CheckoutContainer>
        <ProductContainer>
          <img src={props.image} alt="" />
          <BuyConainer>
            <p>{props.title}</p>
            <Buttons>
              <div>
                <span onClick={() => setCount((c) => Math.max(c - 1, 0))}>
                  -
                </span>
                {count}
                <span onClick={() => setCount(count + 1)}>+</span>
              </div>
              <RemoveButton>
                <img src={trash} alt="" />
                REMOVER
              </RemoveButton>
            </Buttons>
          </BuyConainer>
          <p>R$ 9,90</p>
        </ProductContainer>
        <nav>
          <span>
            Total de itens <strong>R$ 9,90</strong>
          </span>{' '}
          <br />
          <span>
            Entrega <strong>R$ 3,50</strong>
          </span>
          <p>
            Total <strong>R$ 13,40</strong>
          </p>
          <button>CONFIRMAR PEDIDO</button>
        </nav>
      </CheckoutContainer>
    </StyledCoffees>
  )
}
