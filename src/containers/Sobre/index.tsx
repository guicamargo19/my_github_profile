import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { GitHubSecao } from './styles'

type Props = {
  imagem1: string
  imagem2: string
}

const Sobre = (props: Props) => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">Olá 👋</Paragrafo>
    <Paragrafo tipo="principal">
      Apaixonado pelo mundo digital e trabalhando com de Tecnologia da
      Informação há 12 anos, tive a oportunidade de atuar em diversos setores do
      área. Minha experiência teve início na área de tutoria para crianças e
      idosos em uma escola de informática no interior de São Paulo, onde pude
      desenvolver habilidades de comunicação, durante 2 anos me especializei em
      atendimento e expressão humanizados.
    </Paragrafo>
    <Paragrafo tipo="principal">
      Sendo a maior parte da minha carreira no setor de suporte técnico e
      operacional e no setor de infraestrutura e redes, pude agregar grande
      conhecimento e contato com diversas tecnologias e situações de prioridade.
    </Paragrafo>
    <Paragrafo tipo="principal">
      Após uma vivência internacional de 4 anos no Japão, obtendo uma
      experiência inesquecível e vivenciando uma oportunidade incrível de
      conhecer outra cultura, eu decidi mudar o rumo da minha carreira para
      programação e desenvolvimento. Desde o final de 2021, venho estudando
      desenvolvimento Full Stack Python e me preparando para as oportunidades do
      mercado de trabalho.
    </Paragrafo>
    <Paragrafo tipo="principal">
      Atualmente estudo Desenvolvimento Full Stack Python na EBAC e utilizo
      diversas linguagens de programação para me qualificar para o mercado de
      trabalho, sendo tecnologias Back-end e Front-end como Python, HTML5 e
      CSS3, Django Web Framework, JavaScript, Bibliotecas jQuery, VueJS,
      ReactJS, SASS, Gulp, Parcel, Vite, classes Bootstrap e banco de dados
      PostgreSQL, dentre outras.
    </Paragrafo>
    <Paragrafo tipo="principal">
      Meu objetivo de carreira profissional é estar qualificado e poder atuar
      com autoridade na área de desenvolvimento, colaborando, crescendo e
      vivenciando grandes oportunidades como as quais já vivi.
    </Paragrafo>
    <GitHubSecao>
      <img src={props.imagem1} />
      <img src={props.imagem2} />
    </GitHubSecao>
  </section>
)

export default Sobre
