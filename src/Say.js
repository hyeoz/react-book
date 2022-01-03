import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onclickEnter = () => setMessage('Hi!');
  const onClickLeave = () => setMessage('Bye!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <hr />
      <button onClick={onclickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <h1 style={{ color }}>{message}</h1>
      <button
        style={{ color: 'red' }}
        onClick={() => {
          setColor('red');
          console.log(color); // setState 함수는 비동기. 이전 state 값이 뜸.
        }}
      >
        Red
      </button>
      <button
        style={{ color: 'green' }}
        onClick={() => {
          setColor('green');
          console.log(color);
        }}
      >
        Green
      </button>
      <button
        style={{ color: 'blue' }}
        onClick={() => {
          setColor('blue');
          console.log(color);
        }}
      >
        Blue
      </button>
    </div>
  );
};

export default Say;
