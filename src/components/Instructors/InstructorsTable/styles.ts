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
  position: relative;

  &:hover, &:focus {
    border: 2px solid #3da77d;
  }

  div.header {
    display: flex;
    align-items: baseline;
    width: 90%;
    margin: 0 auto;

    header {
      padding: 1rem;
      color: white;
      font-size: 1.15rem;
      text-transform: uppercase;
      line-height: 2rem;
      font-weight: bold;
      width: 90%;
      margin: 0 auto;
    }

    button {
      width: 25%;
      padding: 0.5rem;
      text-align: center;
      display: flex;
      justify-content: center;
      background: #7159c1;
      border-radius: 0.5rem;
      border: none;
      color: white;

    }
  }


  .content {
    display: block;

    table  {

      border-spacing: 0;
 
     font-size: 1.15rem;
     margin-left: 2rem;
     width: 90%;
     text-align: left;
     margin: 0 auto;
 
     thead tr th {
      text-align: left;
      color: white;
      font-weight: normal;
    }

    td, th {
    padding: 1.5rem;
    border-bottom: 1px solid #cccccc;
    color: white;
  }

th {
    text-transform: uppercase;
    color: white;
    font-size: 1rem;
}
 
tbody td:first-child {
  color: white;
  cursor: pointer;  

  &:hover {
    text-decoration: underline;
    color: #7159c1;
  }
}

tbody td a {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: .2rem;
  color: white;
  background: #44ba8b;
  width: 4rem;
  text-align: center;
  border-radius: 0.5rem;

  transition: background 0.2s;
  &:hover {
    background: #3da77d
  }
}
    
   }
  }

`;
