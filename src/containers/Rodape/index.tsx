import { Text } from './styles'

const Rodape = () => {
  const getYear = () => {
    return String(new Date().getFullYear())
  }
  return (
    <Text>
      {getYear()} - &copy;
      <a href="https://portfolio-pink-omega-63.vercel.app/">
        <strong> Portfólio Guilherme Camargo </strong>
      </a>{' '}
      - Todos os direitos reservados
    </Text>
  )
}

export default Rodape
