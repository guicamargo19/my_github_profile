import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, assumenda
      facere, ducimus aliquid, error in quia similique cum reiciendis
      perspiciatis consequuntur? Nulla rerum, iure accusantium quos repellat
      delectus molestias ipsa!
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=guicamargo19&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=guicamargo19&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
