import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import Rodape from './containers/Rodape'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [usarTemaDark, setusarTemaDark] = useState(false)
  const [nowTheme, setnowTheme] = useState('Dark')
  const [themeImage1, setthemeImage1] = useState(
    'https://github-readme-stats.vercel.app/api?username=guicamargo19&show_icons=true&theme=light&include_all_commits=true&count_private=true'
  )
  const [themeImage2, setthemeImage2] = useState(
    'https://github-readme-stats.vercel.app/api/top-langs/?username=guicamargo19&layout=compact&langs_count=7&theme=light'
  )

  function changeThemeImages() {
    if (
      themeImage1 ==
      'https://github-readme-stats.vercel.app/api?username=guicamargo19&show_icons=true&theme=light&include_all_commits=true&count_private=true'
    ) {
      setthemeImage1(
        'https://github-readme-stats.vercel.app/api?username=guicamargo19&show_icons=true&theme=dracula&include_all_commits=true&count_private=true'
      )
      setthemeImage2(
        'https://github-readme-stats.vercel.app/api/top-langs/?username=guicamargo19&layout=compact&langs_count=7&theme=dracula'
      )
    } else {
      setthemeImage1(
        'https://github-readme-stats.vercel.app/api?username=guicamargo19&show_icons=true&theme=light&include_all_commits=true&count_private=true'
      )
      setthemeImage2(
        'https://github-readme-stats.vercel.app/api/top-langs/?username=guicamargo19&layout=compact&langs_count=7&theme=light'
      )
    }
  }

  function trocarTema() {
    setusarTemaDark(!usarTemaDark)
    if (nowTheme == 'Light') {
      setnowTheme('Dark')
      changeThemeImages()
    } else {
      setnowTheme('Light')
      changeThemeImages()
    }
  }

  return (
    <ThemeProvider theme={usarTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar tema={nowTheme} trocarTema={trocarTema} />
        <main>
          <Sobre imagem1={themeImage1} imagem2={themeImage2} />
          <Projetos />
          <Rodape />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
