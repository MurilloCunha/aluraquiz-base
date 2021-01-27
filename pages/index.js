import db from '../db.json'
import  Widget  from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GithubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            titulo
          </Widget.Header>
          <Widget.Content>
            conteudo
          </Widget.Content>
        </Widget>
        <Widget>
          textos
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner/>
    </QuizBackground>
  )
}