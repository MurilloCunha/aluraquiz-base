import React from 'react';
import PropType from 'prop-types';
import Widget from '../Widget';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        Tela de Resultado:
      </Widget.Header>

      <Widget.Content>
        <p>
          {`Você acertou
          ${results.filter((x) => x).length}
          perguntas`}
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
