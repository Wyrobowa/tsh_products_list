import styled from 'styled-components';

export const LoaderSpinner = styled.div`
  position: relative;
  height: 66px;
  width: 64px;
`;

export const Spinner = styled.div`
  position: absolute;
  border: 4px solid ${({ theme }) => theme.colors.blueDark};
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

  &:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
`;
