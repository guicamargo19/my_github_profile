import styled from 'styled-components'

export const Text = styled.footer`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;
  color: ${(props) => props.theme.corPrincipal};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.corPrincipal};
    transition: all ease-in-out 0.2s;

    &:hover {
      opacity: 50%;
      transition: all ease-in-out 0.2s;
    }
  }
`
