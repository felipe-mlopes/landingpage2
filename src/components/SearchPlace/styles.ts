import styled from "styled-components";
import { Search } from "styled-icons/evil"

export const Container = styled.div`
  width: 80%;

  margin: 20px 0 0;

  input {
    width: 100%;
    height: 66px;
    
    padding: 0 30.5px;
    border-radius: 10px;
    border: none;
    
    background-color: rgba(255, 255, 255, 1);

    position: relative;
    
    ::placeholder {
      color: rgba(30, 37, 94, 1);
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 12px;
      opacity: .3;
    }

    ::-webkit-search-cancel-button {
      display: none;
    }

    ~ svg {
      position: relative;
      top: -50%;
      left: calc(740px - 230px);
    }
  }  
`

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;

  color: rgba(30, 37, 94, 1);
  opacity: .3;
`