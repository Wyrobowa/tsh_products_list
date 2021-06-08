import React from 'react';

// Icons
import icon from '../../common/icons/spinner.svg';

// Styles
import * as Styled from './LoaderStyles';

const Loader = () => {
  return (
    <Styled.Loader src={icon} />
  );
};

export default Loader;
