import styled from 'styled-components';

export const Container = styled.div`
  background: #21211e;
  width: 100%;
  height: 70vh;
  border-radius: 2.5rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  margin-left: 7rem;
  overflow: scroll;

  &:hover, &:focus {
    border: 2px solid #3da77d;
  }

  div.header {
    display: flex;
    align-items: baseline;
    width: 90%;
    margin: 0 auto;

    p {
      padding: 1rem;
      color: black;
      font-size: 1.15rem;
      text-transform: uppercase;
      line-height: 2rem;
      font-weight: bold;
      width: 90%;
      margin: 0 auto;
      color: white; 
    } 
  }

    .details {
    padding: 1rem;

    .grid form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin: 0 auto;
      width: 80%;
    }
    .item {
    background: white;
    border-radius: 0.8rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1.7rem 0;
    display: grid;
    gap: 1rem;


   label {
    font-size: 14px;
    line-height: 24px;
    color: #777;
    letter-spacing: 0.7px;
    font-weight: normal;
    margin-left: 1rem;
    margin-bottom: 0.5rem;

  }
    input{
    color: #555;
    font-weight: bold;
    font-size: 1rem;
    border: none;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
  }

}

  .buttons {
    display: flex;
  
  .a {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: lightcoral;
    border-radius: 0.8rem;
    color: #f6f6f6;
    padding: 0.8rem;
    margin-right: 1rem;
    border: none;

   
  }
  
  button:last-child {
    border: none;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: #3da77d;
    border-radius: 0.8rem;
    color: #f6f6f6;
    padding: 0.8rem;
    width: 4.5rem;

    transition: background 0.2s;
  &:hover {
    background: #44ba8b;
    }
  }
  }





}
`;
