import Logo from '../../assets/logo-coffee-delivery.svg'
import Icon from '../../assets/Icon.svg'

import { Cart, HeaderContainer } from './style'
import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <img src={Logo} alt="" />
      </NavLink>
      <nav>
        <span>
          <img src={Icon} alt="" /> Porto Alegre, RS
        </span>
        <NavLink to="/checkout" title="carrinho">
          <Cart>
            <ShoppingCart size={22} />
          </Cart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
