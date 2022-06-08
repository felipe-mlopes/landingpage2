import styled from 'styled-components';
import { Menu } from 'styled-icons/heroicons-outline'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1110px;

  span {
    display: flex;
    align-items: center;
    padding: 8px 7.5px 8px 8px;

    background-color: rgba(255, 255, 255, 1);
    border-radius: 6px;
    cursor: pointer;
  }
`

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span img {
    width: 14px;
    height: 14px;
  }

  p {
    margin-left: 9px;

    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    line-height: 28px;
    color: rgba(255, 255, 255, 1);
  }
`

export const MenuIcon = styled(Menu)`
  width: 18px;
  height: 18px;

  color: rgba(30, 37, 94, 1);
`

export const MenuOpened = styled.span`
  width: 150px;
  height: 180px;
  background-color: rgba(255, 255, 255, .2);
  
  position: absolute;
  top: 88px;
  right: 100px;

  ::after, ::before {
      content: '';
      position: absolute;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 15px solid #fff;
      left: 55px;
      top: -14px;
    }

  ul li {
    padding: 18px 36px;
    border-radius: 6px;

    font-family: 'Open Sans', sans-serif;
    font-size: 14px;;

    :hover {
      background: rgba(30, 37, 94, .7);
      transition: background .45s;

      color: rgba(255, 255, 255, 1);
    }

  }


`
