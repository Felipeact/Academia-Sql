import { RiContactsLine } from 'react-icons/ri'
import { Container } from './styles'

export function SideBar(){
  return(
    <Container>

      <p>GENERAL</p>

      <div>
        <RiContactsLine />
        <a href="/">Instructors</a>
      </div>
      <div>
        <RiContactsLine />
        <a href="/members">Members</a>
      </div>

    </Container>
  )
}