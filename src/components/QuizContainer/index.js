import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  padding-top:20%;
  padding-left: 13%;
  padding-right: 50%;
  display: flex;
  direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizBackground;
