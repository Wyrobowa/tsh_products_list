import styled from 'styled-components';

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  cursor: pointer;
  
  &:checked {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 4px;
  box-sizing: border-box;
  height: 24px;
  width: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const Label = styled.label`
  position: relative;
  display: block;
  margin-right: 10px;
  padding-left: 30px;
  line-height: 24px;

  &:hover {
    ${Input} ~ ${Checkmark} {
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }

  ${Input}:checked ~ ${Checkmark} {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  ${Input}:checked ~ ${Checkmark}:after {
    display: block;
  }

  ${Checkmark}:after {
    left: 8px;
    top: 3px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    border: solid ${({ theme }) => theme.colors.white};
    border-width: 0 3px 3px 0;
    width: 5px;
    height: 10px;
  }
`;
