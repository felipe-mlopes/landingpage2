import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(255, 255, 255, 1);
    padding: 17px 65px;
    border: none;
    border-radius: 100px;
    cursor: pointer;

    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: rgba(30, 37, 94, 1);

    :hover {
      background: rgba(30, 37, 94, .7);
      transition: background .45s;

      color: rgba(255, 255, 255, 1);
    }
  }
`