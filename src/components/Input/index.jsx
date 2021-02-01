import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

function Input({ placeholder, onChange }) {
  return (
    <div>
      <InputBase placeholder={placeholder} onChange={onChange} name="nome do Usuário" />
    </div>
  );
}

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
