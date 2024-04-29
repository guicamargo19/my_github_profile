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
      transition: all ease-in-out 0.2s;

      a {
        color: ${(props) => props.theme.corPrincipal};;
      }

      &:hover {
        transform: scale(1.1);
        transition: all ease-in-out 0.2s;
      }
    }

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`
