import styled from 'styled-components'

type MainButton = {
  main: boolean
  fontSize?: string
}

const Botao = styled.button<MainButton>`
  background-color: ${(props) => (props.main ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" main>
        Clique aqui
      </Botao>
      <Botao fontSize="14px" main={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" main>
        <span>Perigo</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
