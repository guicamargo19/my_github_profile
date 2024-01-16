import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corBorda};
  padding: 16px;
`

export const LinkBotao = styled.a`
  background-color: ${(props) => props.theme.corFundoBotao};
  color: ${(props) => props.theme.corFundo};
  font-size: 14px;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.corFundoBotao};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.corFundo};
    color: ${(props) => props.theme.corFundoBotao};
    border: 1px solid ${(props) => props.theme.corFundoBotao};
  }
`
