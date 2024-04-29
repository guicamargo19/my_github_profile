import styled from 'styled-components'

export const GitHubSecao = styled.div`
  margin-bottom: 64px;
  margin-top: 32px;

  img {
    height: 157px;
    padding-right: 8px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`
export const Section = styled.section`
  text-align: justify;

  h3 {
    margin-bottom: 20px;
  }

  ul > li > p {
    padding-bottom: 0;
  }
`
