import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleInput = (e) => {
    const newValue = e.target.value;
    setName(newValue);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>Alura Quiz</Widget.Header>
          <Widget.Content>
            <Widget.Text>
              Teste os seus conhecimentos sobre *** e divirta-se criando o seu AluraQuiz!
            </Widget.Text>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input placeholder="digite seu nome" onChange={handleInput} />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h4>Quizes da galera</h4>
            <Widget.Text>
              Dê uma olhada nesses quizes incríves que o pessoal da Imersão Next.js fez:
            </Widget.Text>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/MurilloCunha" />
    </QuizBackground>
  );
}
