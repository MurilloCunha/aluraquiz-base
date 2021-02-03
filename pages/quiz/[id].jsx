/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/views/quiz/index';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, gitHubUser] = context.query.id.split('___');
  console.log('Infos que o next da pra gente', context.query.id);

  const dbExterno = await fetch(
    `https://${projectName}.${gitHubUser}.vercel.app/api/db`,
  )
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha em buscar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => console.error(err));

  return {
    props: {
      dbExterno,
    },
  };
}

QuizDaGaleraPage.propTypes = {
  dbExterno: PropTypes.objectOf(PropTypes.any).isRequired,
};
