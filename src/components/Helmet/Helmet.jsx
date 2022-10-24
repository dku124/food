import React from 'react';

const Helmet = () => {
  document.title = 'Food - ' + prop.title;
  return <div className="w-100">{prop.children}</div>;
};

export default Helmet;
