import { RiSearchLine } from 'react-icons/ri'

import { Container } from './styles'

export function Header(){
  return (
    <Container>
      <h1>Gym Manager<strong>.</strong> </h1>


      <label htmlFor="">
        <RiSearchLine style={{ fill: 'black', marginLeft: '0.5rem'}}/>
        <input type="text" placeholder="Search"/>
      </label>

    </Container>
  )
}