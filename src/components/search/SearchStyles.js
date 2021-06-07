import styled from 'styled-components';

// Components
import Button from '../button/Button';
import Field from '../field/Field';

export const Search = styled.form`
  position: relative;
  width: 100%;
  margin-bottom: 25px;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    margin: 0 20px 0 0;
  }
`;

export const SearchField = styled(Field)`
  width: 100%;
  height: 48px;
`;

export const SearchButton = styled(Button)`
  position: absolute;
  top: calc(50% - 9px);
  right: 15px;
`;

export const Image = styled.img`
  width: 18px;
  height: 18px;
`;
