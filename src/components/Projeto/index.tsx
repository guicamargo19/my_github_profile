import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Title>Projeto Lista de tarefas</Title>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualisar</LinkBotao>
  </Card>
)

export default Projeto
