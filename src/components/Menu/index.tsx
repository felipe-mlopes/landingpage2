import React, { useState } from 'react'

import { Container, WrapperLogo, MenuIcon, MenuOpened } from './styles'
import Logo from '../../assets/logo.svg'

export const MenuHome: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  function toggleMenuVisibility() {
    setIsMenuOpened(!isMenuOpened)
  }

  return (
    <Container>
      <WrapperLogo>
        <span>
          <img src={Logo} alt="logo" />
        </span>
        <p>Kreed</p>
      </WrapperLogo>
      <span onClick={toggleMenuVisibility}>
        <MenuIcon />
        { isMenuOpened &&
        <MenuOpened>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Settings</li>
          </ul>  
        </MenuOpened>
         }
      </span>
    </Container>
  )
}