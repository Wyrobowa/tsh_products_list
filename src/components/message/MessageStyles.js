import styled from 'styled-components';

export const Message = styled.div`
  position: fixed;
  top: 20px;
  left: 10%;
  justify-content: space-between;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.black2};
  border-radius: 8px;
  box-sizing: border-box;
  width: 80%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 8px 32px rgba(17, 18, 20, 0.158514);
  
  > * {
    color: ${({ theme }) => theme.colors.black2};
  }

  ${({ theme, type }) => type === 'success' && `
    border-color: ${theme.colors.green};
    
    > * {
      color: ${theme.colors.green};
    }
  `}

  ${({ theme, type }) => type === 'warning' && `
    border-color: ${theme.colors.orange};
    
    > * {
      color: ${theme.colors.orange};
    }
  `}

  ${({ theme, type }) => type === 'info' && `
    border-color: ${theme.colors.blue};
    
    > * {
      color: ${theme.colors.blue};
    }
  `}

  ${({ theme, type }) => type === 'danger' && `
    border-color: ${theme.colors.red};
    
    > * {
      color: ${theme.colors.red};
    }
  `}
`;

export const Icon = styled.img`
  cursor: pointer;
  width: 10px;
`;
