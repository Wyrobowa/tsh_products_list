import styled from 'styled-components';

// Components
import Button from '../button/Button';
import Field from '../field/Field';

export const Search = styled.form`
  position: relative;
`;

export const SearchField = styled(Field)`
  width: 390px;
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
