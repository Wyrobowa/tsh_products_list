import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 8px;
  box-sizing: border-box;
  padding: 15px;
  
  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey2};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.grey2};
  }

  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.grey2};
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;
