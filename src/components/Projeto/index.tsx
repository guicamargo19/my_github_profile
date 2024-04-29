import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { Card, LinkBotao } from './styles'

type Props = {
  title: string
  texto: string
  link: string
}

const Projeto = (props: Props) => (
  <Card>
    <Title>{props.title}</Title>
    <Paragrafo tipo="secundario">{props.texto}</Paragrafo>
    <LinkBotao href={props.link}>ACESSAR</LinkBotao>
  </Card>
)

export default Projeto
