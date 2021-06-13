import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 8px;
  box-sizing: border-box;
  padding: 15px;
  font-size: 14px;
  
  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey5};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.grey5};
  }

  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.grey5};
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
`;
