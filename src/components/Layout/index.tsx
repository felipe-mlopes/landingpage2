import React from "react";

import { Container, Header, Main } from './styles'

import { MenuHome } from "../Menu"
import SearchPlace from "../SearchPlace";
import Button from "../Button"

const Layout: React.FC = () => {
  return (
    <Container>
      <Header>
        <MenuHome />
      </Header>
      <Main>
        <h1>Search Our Customer Database</h1>
        <SearchPlace />
        <p>Get your customers onboarded with our techolgy</p>
        <Button />
      </Main>
    </Container>
  )
}

export default Layout