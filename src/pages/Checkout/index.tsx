import { FormContainer } from './styled'
import { SelectedCoffees } from './components/SelectedCoffees'
import { RequestCard } from './components/Form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationonSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationonSchema>

type ConfirmOrderFormData = OrderData

export const Checkout = () => {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationonSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { cleanCart } = useCart()

  const handleConfirmOrder = (data: ConfirmOrderFormData) => {
    navigate('/success', {
      state: data,
    })
    cleanCart()
  }
  return (
    <FormProvider {...confirmOrderForm}>
      <FormContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <RequestCard />
        <SelectedCoffees />
      </FormContainer>
    </FormProvider>
  )
}
