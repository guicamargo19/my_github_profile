import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { GitHubSecao, Section } from './styles'

type Props = {
  imagem1: string
  imagem2: string
}

const Sobre = (props: Props) => (
  <Section>
    <Title fontSize={16}>Perfil do GitHub</Title>
    <Paragrafo tipo="principal">Olá, sou Guilherme. 👋 </Paragrafo>
    <Paragrafo tipo="principal">
      Sou um engenheiro de computação altamente motivado, com forte raciocínio
      analítico e paixão por programação. Estou em transição de carreira para me
      tornar um Desenvolvedor Full Stack Python ativo no mercado e busco meu
      primeiro cargo profissional nesta área. Nos últimos 3 anos, aprimorei
      minhas habilidades de programação construindo aplicações web e APIs usando
      Django com Python, sites responsivos e focados em acessibilidade
      utilizando HTML, CSS e JavaScript, jQuery e Bootstrap, e também projetos
      complexos em ReactJS e Vue.js, criando integrações entre Back-end e
      Front-end. Minha experiência em infraestrutura de TI, rede e suporte me
      tornou um profissional com excelentes habilidades em resolução de
      problemas, comunicação e trabalho em equipe, todas vitais para um
      desenvolvedor de sucesso.
    </Paragrafo>

    <ul>
      <li>
        <Paragrafo tipo="principal">
          - Construção de aplicações web e APIs usando Django com Python
        </Paragrafo>
      </li>
      <li>
        <Paragrafo tipo="principal">
          - Sites utilizando HTML, CSS e JavaScript com jQuery e classes
          Bootstrap
        </Paragrafo>
      </li>
      <li>
        <Paragrafo tipo="principal">
          - Projetos completos com biblioteca ReactJS, Redux e Framework Vue.js
          com estilização em CSS Modules ou Styled Components
        </Paragrafo>
      </li>
      <li>
        <Paragrafo tipo="principal">
          - Utilização do Docker para construção de contêineres para ambiente de
          desenvolvimento e produção.
        </Paragrafo>
      </li>
      <li>
        <Paragrafo tipo="principal">
          - Integrações entre Back-end e Front-end
        </Paragrafo>
      </li>
      <li>
        <Paragrafo tipo="principal">
          - Foco em performance, acessibilidade e responsividade de projetos
          web.
        </Paragrafo>
      </li>
      <li>
        <Paragrafo tipo="principal">
          - Utilização de pré-processadores CSS como SASS e LESS
        </Paragrafo>
      </li>
      <li>
        <Paragrafo tipo="principal">
          - Automatização de tarefas com Gulp
        </Paragrafo>
      </li>
      <li>
        <Paragrafo tipo="principal">
          - Deploys na nuvem como a Google Cloud Platform, Vercel e
          PythonAnywhere como web hosting service (PaaS)
        </Paragrafo>
      </li>
      <li>
        <Paragrafo tipo="principal">
          - Implantação de CI/CD nos projetos com GitHub Actions
        </Paragrafo>
      </li>
      <li>
        <Paragrafo tipo="principal">
          - Testes unitários e de integração com Jest e Cypress
        </Paragrafo>
      </li>
      <li>
        <Paragrafo tipo="principal">
          - Servidores de aplicação em Linux com configuração de Nginx e
          Gunicorn para distribuição dos projetos publicados de forma segura com
          SSL
        </Paragrafo>
      </li>
    </ul>
    <GitHubSecao>
      <img src={props.imagem1} />
      <img src={props.imagem2} />
    </GitHubSecao>
  </Section>
)

export default Sobre
