import React from 'react';

const ExampleCard = ({ title, children }) => {
  return (
    <div className="example-card" style={{border:'1px solid #ccc',padding:16,borderRadius:8,margin:8}}>
      <h3 style={{marginTop:0}}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default ExampleCard;
