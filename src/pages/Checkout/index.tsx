import Icon from '../../assets/icon-checkout.svg'
import IconMoney from '../../assets/icon-dinheiro.svg'
import MoneyIcon from '../../assets/dinheiro.svg'
import CredicCard from '../../assets/cartao-de-credito.svg'
import DebitCard from '../../assets/cartao-de-debito.svg'
import cafe from '../../assets/expresso-americano.svg'
import trash from '../../assets/trash.svg'
import { useState } from 'react'

import {
  AdressName,
  Buttons,
  BuyConainer,
  CEPAdress,
  CheckoutContainer,
  City,
  Complement,
  District,
  FormContainer,
  NumberOfAdress,
  OptionsOfPay,
  PayContainer,
  ProductContainer,
  RemoveButton,
  RequestCard,
  RequestContainer,
  SelectedCoffees,
  UF,
} from './styled'

export const Checkout = () => {
  const [count, setCount] = useState(0)
  return (
    <FormContainer>
      <RequestContainer>
        <h1>Complete o seu pedido</h1>
        <RequestCard>
          <h3>
            {' '}
            <img src={Icon} alt="" /> Endereço de Entrega
          </h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>

          <form>
            <CEPAdress type="number" name="CEP" id="CEP" placeholder="CEP" />
            <AdressName type="text" placeholder="Rua" />
            <form>
              <NumberOfAdress
                type="number"
                name="number"
                id="number"
                placeholder="Número"
              />
              <Complement type="text" placeholder="Complemento" />
            </form>

            <form>
              <District type="text" placeholder="Bairro" />
              <City type="text" placeholder="Cidade" />
              <UF type="text" placeholder="UF" />
            </form>
          </form>
        </RequestCard>

        <PayContainer>
          <h3>
            {' '}
            <img src={IconMoney} alt="" /> Pagamento
          </h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <OptionsOfPay>
            <div>
              {' '}
              <img src={MoneyIcon} alt="" /> CARTÃO DE CRÉDITO
            </div>
            <div>
              {' '}
              <img src={CredicCard} alt="" /> CARTÃO DE DÉBITO
            </div>
            <div>
              {' '}
              <img src={DebitCard} alt="" /> DINHEIRO
            </div>
          </OptionsOfPay>
        </PayContainer>
      </RequestContainer>

      <SelectedCoffees>
        <h1>Cafés selecionados</h1>
        <CheckoutContainer>
          <ProductContainer>
            <img src={cafe} alt="" />
            <BuyConainer>
              <p>Expresso Tradicional</p>
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
      </SelectedCoffees>
    </FormContainer>
  )
}
