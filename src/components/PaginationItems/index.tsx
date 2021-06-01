import { Container } from './styles'


interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void
}

export function PaginationItem({ isCurrent = false, number, onPageChange}: PaginationItemProps){
  return isCurrent ? (
    <Container>
      <button>{number}</button>
    </Container>
  ) : (
    <Container>
    <button onClick={() => onPageChange(number)}>
      {number}
    </button>
    </Container>
  )
}