import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);

  div.header {
    
    align-items: baseline;
    display: flex;
    justify-content: space-between;

    .react-modal-close {
      border: 0;
      background: transparent;
      transition: filter 0.2s ease;
      &:hover {
        filter: brightness(0.8)
      }}
  }
  
  section {
    width: 30rem;
    background: white;
    height: 40rem;
    border-radius: 2rem;
    padding: 2rem;


   h3 {
    color: #7159c1;
    font-size: 1.5rem;
    margin-bottom: 1rem;

  }  

  form {
    margin-top: 2rem;
    
    .content {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;
      display: block;
      
  
      label {
        margin-top: 1rem;
        display: block;
        font-size: 1.25rem;
        line-height: 2rem;
        color: #555;
        font-weight: bold;
        margin-bottom: 0.4rem;
      }
  
      input {
        width: 100%;
        border: none;
        color: #777;
        font-weight: normal;
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
    }
  }

.buttons button {
    width: 100%;
    border: none;
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: #3da77d;
    color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    

    font-size: 16px;
  } 

  .buttons a {
    width: 100%;
    border: none;
    margin-top: 2rem;
    padding: 0.5rem;
    background-color: #7159c1;
    color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    

    font-size: 16px;
  } 

}


  
`;
