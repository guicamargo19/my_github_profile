import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { GitHubSecao, Section } from './styles'

type Props = {
  imagem1: string
  imagem2: string
}

const Sobre = (props: Props) => (
  <Section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">Olá 👋</Paragrafo>
    <Paragrafo tipo="principal">Sobre mim</Paragrafo>
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
    <Paragrafo tipo="principal">Front-end</Paragrafo>
    <Paragrafo tipo="principal">
      ● Domínio de HTML5, CSS3 e JavaScript
    </Paragrafo>
    <Paragrafo tipo="principal">
      ● Layouts Front-end, Bootstrap, CSS Modules, jQuery, e Vue.js framework
    </Paragrafo>
    <Paragrafo tipo="principal">
      ● React e Biblioteca React Redux e estilização com Styled Components
    </Paragrafo>
    <Paragrafo tipo="principal">
      ● SASS e LESS como pré-processadores de CSS
    </Paragrafo>
    <Paragrafo tipo="principal">
      ● Criação de microsserviços e automatização de tarefas com Gulp ou Grunt
    </Paragrafo>
    <Paragrafo tipo="principal">
      ● Testes unitários com Jest e testes de integração com Cypress
    </Paragrafo>
    <Paragrafo tipo="principal">
      ● Gerenciamento de pacotes com NPM e Vite no ambiente de desenvolvimento.
    </Paragrafo>
    <Paragrafo tipo="principal">Back-end</Paragrafo>
    <Paragrafo tipo="principal">● Python</Paragrafo>
    <Paragrafo tipo="principal">● Servidores de aplicação</Paragrafo>
    <Paragrafo tipo="principal">● Docker e Docker-compose</Paragrafo>
    <Paragrafo tipo="principal">● Integração Front-end e Back-end</Paragrafo>
    <Paragrafo tipo="principal">
      ● CircleCI (Continuous Integration e Continuous Delivery)
    </Paragrafo>
    <Paragrafo tipo="principal">● Django Rest Framework</Paragrafo>
    <Paragrafo tipo="principal">● Postgres e Rest APIs</Paragrafo>
    <Paragrafo tipo="principal">
      ● Experiência com SQL como PostgreSQL, MySQL e banco de dados
    </Paragrafo>
    <Paragrafo tipo="principal">● Testes com Django</Paragrafo>
    <Paragrafo tipo="principal">
      ● Versionamento com Git e GitHub Actions ● Google Cloud Platform
    </Paragrafo>
    <GitHubSecao>
      <img src={props.imagem1} />
      <img src={props.imagem2} />
    </GitHubSecao>
  </Section>
)

export default Sobre
