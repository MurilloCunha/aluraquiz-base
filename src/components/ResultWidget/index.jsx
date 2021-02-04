import React from 'react';
import PropType from 'prop-types';
import Widget from '../Widget';

function ResultWidget({ results }) {
  const rightAnswers = results.filter((x) => x).length;

  return (
    <Widget>
      <Widget.Header>
        Resultado:
      </Widget.Header>

      <Widget.Content>
        {rightAnswers >= 3
          && (
          <>
            <img
              alt="Descrição"
              style={{
                width: '100%',
                height: '15rem',
                objectFit: 'cover',
              }}
              src="https://thumbs.gfycat.com/HardPotableHornbill-size_restricted.gif"
            />
            <audio src="../../audios/song3.mp3" type="audio/mpeg" autoPlay>
              <track default kind/>
            </audio>
          </>
          )}
        {rightAnswers < 3
          && (
          <img
            alt="Descrição"
            style={{
              width: '100%',
              height: '15rem',
              objectFit: 'cover',
            }}
            src="https://media1.tenor.com/images/44d43d53b47ca44b8b5253cdedaa3212/tenor.gif?itemid=4794684"
          />
          )}
        <p>
          {`Você acertou
          ${rightAnswers}
          pergunta(s)`}
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              {`#0${index + 1} Resultado: ${result === true ? 'acertou' : 'errou'}`}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}
export default ResultWidget;

ResultWidget.propTypes = {
  results: PropType.arrayOf(PropType.bool).isRequired,
};
