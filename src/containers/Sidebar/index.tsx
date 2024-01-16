import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
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
        Engenheiro e Desenvolvedor Full Stack Python
      </Descricao>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/guilherme-ferreira-camargo/">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/guicamargo19">
            <i className="bi bi-github"></i>
          </a>
        </li>
      </ul>
      <BotaoTema onClick={props.trocarTema}>{props.tema}</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
