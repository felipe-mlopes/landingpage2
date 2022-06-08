import { createGlobalStyle } from 'styled-components'
import Hero from '../../src/assets/hero.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
  }

  body {
    background-image: url(${Hero});
    background-size: cover;
  }

`