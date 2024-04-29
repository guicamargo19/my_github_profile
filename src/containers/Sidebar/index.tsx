import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Social from '../Social'
import Title from '../../components/Title'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocarTema: () => void
  tema: string
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Guilherme Camargo</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        guicamargo19
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro da computação e Dev Full Stack Python Jr.
      </Descricao>
      <Social />
      <BotaoTema onClick={props.trocarTema}>Theme {props.tema}</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
