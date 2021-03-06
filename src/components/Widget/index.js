import styled from 'styled-components';

const Widget = styled.div`
  width:100%;
  margin-bottom:1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
`;

Widget.Content = styled.header`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;
Widget.QuestionHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2rem ;
  background-color: ${({ theme }) => theme.colors.primary};
`;
Widget.Text = styled.p`
  font-size: 0.8rem;
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Widget;
