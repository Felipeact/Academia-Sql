 import styled from 'styled-components';

export const Container = styled.div`
 
  font-family: 'Roboto';
  display: flex;
  margin: 0 auto;
  width: 90%;
  margin-top: 3rem;

  h1 strong {
    color: #44ba8b;
  }


  label {
    flex: 1;
    display: flex;
    padding: 0.8rem 0.1rem;
    margin-left: 2rem;
    max-width: 25rem;
    align-self: center;
    color: black;
    position: relative;
    border-radius: 1rem;
    background: #d6d6d6;
    
    

    input {
      width: 100%;
      color: black;
      padding: 0 4px;
      margin-right: 4px;
      border: none;
      background: #d6d6d6;
      margin-left: 0.5rem;
      
    }   
  }
`;
