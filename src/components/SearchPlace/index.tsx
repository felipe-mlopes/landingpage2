import React from "react";

import { Container, SearchIcon } from './styles'

const SearchPlace: React.FC = () => {
  return (
    <Container>
      <input 
      type="search"
      placeholder="Find your customer here..."
      />
      <SearchIcon />
    </Container>
  )
}

export default SearchPlace