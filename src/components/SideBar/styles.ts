import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto';
  display: flex;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: 14%;

  p {
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1.6rem;
    margin: 1rem 0 0.8rem 0;
  }

  div {
    margin-top: 1rem;
    font-size: 1.2rem;
    display: flex;
    cursor: pointer;
  
    transition: color 0.5s;

    &:hover{
      color: #7159c1;
      font-weight: bold;
    }

    a {
      margin-left: 0.5rem;
    }

  }
  
`
