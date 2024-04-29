import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corBorda};
  padding: 16px;
  border-radius: 6px;

  p {
    height: 30px;
  }
`

export const LinkBotao = styled.a`
  background-color: ${(props) => props.theme.corFundoBotao};
  color: ${(props) => props.theme.corFundo};
  font-size: 14px;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.corFundoBotao};
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.corFundo};
    transition: all ease-in-out 0.2s;
    color: ${(props) => props.theme.corFundoBotao};
    border: 1px solid ${(props) => props.theme.corFundoBotao};
  }
`
