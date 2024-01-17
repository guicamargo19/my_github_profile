import styled from 'styled-components'

export const SocialList = styled.div`
    display: flex;

    @media (max-width: 768px) {
      justify-content: center;
    }

    li {
      padding: 4px;
      font-size: 26px;
      margin-bottom: 20px;

      a {
        color: ${(props) => props.theme.corPrincipal};;
      }
    }

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`
