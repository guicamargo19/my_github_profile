import Projeto from '../../components/Projeto'
import Title from '../../components/Title'
import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <Lista>
      <li>
        <Projeto
          link="https://todo-vue-iota-seven.vercel.app/"
          title="To do List"
          texto="Lista de tarefas feita com VueJS"
        />
      </li>
      <li>
        <Projeto
          link="https://calculadora-vue-omega-sooty.vercel.app/"
          title="Calculadora Vue"
          texto="Calculadora Aritmética feita com VueJS"
        />
      </li>
      <li>
        <Projeto
          link="https://github-profile-pi-six.vercel.app/"
          title="GitHub Profiles"
          texto="Projeto GitHub Profiles feita com ReactJS"
        />
      </li>
      <li>
        <Projeto
          link="https://ebac-tech-talks-alpha-black.vercel.app/"
          title="EBAC Tech Talks Site"
          texto="Projeto em HTML5 e CSS3, JS, Bootstrap, SASS e Parcel"
        />
      </li>
      <li>
        <Projeto
          link="https://imc-react-gray-rho.vercel.app/"
          title="Cálculo IMC React"
          texto="Projeto para calcular IMC feito com ReactJS"
        />
      </li>
      <li>
        <Projeto
          link="https://game-of-thrones-site.vercel.app/"
          title="Game of Thrones Site"
          texto="Projeto feito em HTML5 e CSS3, JS, Gulp e SASS"
        />
      </li>
      <li>
        <Projeto
          link="https://clone-disneyplus-ashy-mu.vercel.app/"
          title="Site Disney+ Clone"
          texto="Projeto feito em HTML5 e CSS3, JS, Gulp e SASS"
        />
      </li>
      <li>
        <Projeto
          link="https://site-bunka-store.vercel.app/"
          title="Site Bunka Store"
          texto="Projeto feito em HTML5 e classes Bootstrap e CSS"
        />
      </li>
      <li>
        <Projeto
          link="https://site-gtatelie.vercel.app/"
          title="Site GT Ateliê"
          texto="Projeto feito em HTML5 e CSS3"
        />
      </li>
      <li>
        <Projeto
          link="https://site-tomoda-viagens.vercel.app/"
          title="Site Tomoda Viagens"
          texto="Projeto feito em HTML5 e CSS com JQuery Plugins"
        />
      </li>
    </Lista>
  </section>
)

export default Projetos
