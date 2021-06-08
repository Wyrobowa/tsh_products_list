import styled from 'styled-components';

export const Loader = styled.img`
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
