import React from 'react';
import spinner from './spinner';

export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '200px', margin: '40px auto', display: 'block'}}
      />
    </div>
  );
};
