import IconMoney from '../../../../assets/icon-dinheiro.svg'
import MoneyIcon from '../../../../assets/dinheiro.svg'
import CredicCard from '../../../../assets/cartao-de-credito.svg'
import DebitCard from '../../../../assets/cartao-de-debito.svg'

import { OptionsContainer, OptionsOfPay } from './styled'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { useFormContext } from 'react-hook-form'
import { RegularText } from '../../../../components/Typography'

export const paymentMethods = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <img src={CredicCard} alt="" />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <img src={DebitCard} alt="" />,
  },
  money: {
    label: 'Dinheiro',
    icon: <img src={MoneyIcon} alt="" />,
  },
}

export const PayContainer = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <OptionsContainer>
      <h3>
        {' '}
        <img src={IconMoney} alt="" /> Pagamento
      </h3>
      <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      <OptionsOfPay>
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <PaymentMethodInput
            key={label}
            icon={icon}
            label={label}
            value={key}
            {...register('paymentMethod')}
          />
        ))}

        {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
      </OptionsOfPay>
    </OptionsContainer>
  )
}
