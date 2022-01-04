import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    // 초기 리스트값 설정
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState(''); // 초기 입력창 설정
  const [nextId, setNextId] = useState(5); // 초기 다음 아이디값 설정

  const onChange = (e) => {
    // 입력창 값 넣어주기
    return setInputText(e.target.value);
  };

  const onClick = () => {
    // 클릭하면 새로운 값 생성, 다음 아이디값 +1, 입력창 초기화
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onRemove = (id) => {
    // 값 제거하기 -> filter 함수 활용
    const nextNames = names.filter((name) => {
      return name.id !== id;
    });
    setNames(nextNames);
  };

  const nameList = names.map((name) => {
    return (
      <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
      </li>
    );
  });
  return (
    <>
      <input
        value={inputText}
        onChange={onChange}
        onKeyPress={(e) => {
          if (e.code === 'Enter') {
            onClick();
          }
        }}
      />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
