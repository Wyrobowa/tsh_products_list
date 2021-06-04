import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 8px;
  box-sizing: border-box;
  padding: 15px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.black2};
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.black2};
  }

  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.black2};
  }
`;
