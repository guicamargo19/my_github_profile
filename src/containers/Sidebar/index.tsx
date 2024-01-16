import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Guilherme Camargo</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        guicamargo19
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro e Desenvolvedor Full Stack Python
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
