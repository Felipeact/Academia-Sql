import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  button {
    background: #3da77d;
    border: none;
    width: 2rem; 
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-left: 0.5rem;


    &:hover {
      filter: brightness(80%);
    }
  }
`;
