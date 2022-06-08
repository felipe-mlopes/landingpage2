import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
  padding: 0 165px;

`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 700px;
  margin-top: 130px;
  margin-left: 270px;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: rgba(255, 255, 255, 1);

    line-height: 80px;
    text-align: center;
    }

  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: rgba(255, 255, 255, 1);
    opacity: .7;
  }
`
