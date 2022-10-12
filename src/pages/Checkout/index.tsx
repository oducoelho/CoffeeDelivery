import { FormContainer, RequestContainer } from './styled'
import { SelectedCoffees } from './components/SelectedCoffees'
import { RequestCard } from './components/Form'
import { PayContainer } from './components/PayContainer'

export const Checkout = () => {
  return (
    <FormContainer>
      <RequestContainer>
        <RequestCard />

        <PayContainer />
      </RequestContainer>

      <SelectedCoffees />
    </FormContainer>
  )
}
