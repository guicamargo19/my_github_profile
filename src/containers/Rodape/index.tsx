import { Text } from './styles'
import Paragrafo from '../../components/Paragrafo'

const Rodape = () => (
  <Text>
    <Paragrafo tipo="secundario">
      ® 2024 Guilherme Camargo. Todos os direitos reservados.
    </Paragrafo>
    <Paragrafo tipo="secundario">
      Projeto desenvolvido no curso de Full Stack Python na EBAC - Escola
      Britânica de Artes Criativas e Tecnologia.
    </Paragrafo>
  </Text>
)

export default Rodape
