import React from 'react';

const ButtonLink = WrappedComponent => ({ category, children, history, id, to, type }) => {
  const handleOnClick = () => {
    history.push(to);
  };

  return (
    <WrappedComponent
      category={category}
      id={id}
      onClick={handleOnClick}
      type={type}
    >
      {children}
    </WrappedComponent>
  );
};

export default ButtonLink;
