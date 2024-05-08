/* eslint-disable react/prop-types */


import React from 'react';


function Timer({ time }) {
  console.log('Timer rendered');
  return <div>Timer: {time}</div>;
}

export default React.memo(Timer);

