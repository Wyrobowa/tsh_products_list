import styled from 'styled-components';

export const Loader = styled.img`
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 30px);
  animation: rotation 1s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
