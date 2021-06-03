import React from 'react';

const ButtonLink = WrappedComponent => ({ category, children, history, id, to, type, ...rest }) => {
  const handleOnClick = () => {
    history.push(to);
  };

  return (
    <WrappedComponent
      category={category}
      id={id}
      onClick={handleOnClick}
      type={type}
      {...rest}
    >
      {children}
    </WrappedComponent>
  );
};

export default ButtonLink;
