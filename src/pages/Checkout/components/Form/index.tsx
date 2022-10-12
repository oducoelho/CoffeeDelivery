import Icon from '../../../../assets/icon-checkout.svg'
import {
  AdressName,
  CEPAdress,
  City,
  Complement,
  District,
  FormContainer,
  NumberOfAdress,
  UF,
} from './styled'

export const RequestCard = () => {
  return (
    <div>
      <h1>Complete o seu pedido</h1>
      <FormContainer>
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
      </FormContainer>
    </div>
  )
}
