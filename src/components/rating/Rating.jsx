import React from 'react';
import PropTypes from 'prop-types';

// Styled
import * as Styled from './RatingStyles';

const stars = [1, 2, 3, 4, 5];

const Rating = ({ rate }) => {
  return (
    <Styled.Rating>
      {stars.map(star => (
        <Styled.Star checked={star <= rate} key={star} />
      ))}
    </Styled.Rating>
  );
};

Rating.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default Rating;
