// import React, { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     username: '',
//     message: '',
//   };
//   // constructor(props) {
//   //   super(props);
//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.handleClick = this.handleClick.bind(this);
//   // }
//   // handleChange(e) {
//   //   this.setState({
//   //     message: e.target.value,
//   //   });
//   // }
//   // handleClick() {
//   //   alert(this.state.message);
//   //   this.setState({
//   //     message: '',
//   //   });
//   // }
//   handleChange = (e) => {
//     this.setState({
//       // 객체 안에서 키값을 [ ]로 감싸면 그 안에 넣은 레퍼런스가 가리키는 값이 키값으로 사용됨!
//       [e.target.name]: e.target.value,
//     });
//   };
//   handleClick = () => {
//     alert(this.state.username + ' : ' + this.state.message);
//     this.setState({
//       username: '',
//       message: '',
//     });
//   };
//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handleClick();
//     }
//   };
//   render() {
//     return (
//       <div>
//         <hr />
//         <h1>이벤트 연습</h1>
//         {/* <input
//           type="text"
//           name="message"
//           placeholder="입력하세요."
//           value={this.state.message} // 상태
//           onChange={(e) => {
//             // console.log(e.target.value);
//             this.setState({
//               message: e.target.value, // 상태 업데이트 함수 지정
//             });
//           }}
//         />
//         <button
//           onClick={() => {
//             alert(this.state.message); // 현재 input 에 입력된 상태 보여줌
//             this.setState({
//               // 초기상태로 리셋하여 업데이트 함
//               message: '',
//             });
//           }}
//         >
//           확인
//         </button> */}
// <input
//   type="text"
//   name="username"
//   placeholder="사용자명"
//   value={this.state.username}
//   onChange={this.handleChange}
// />
// <input
//   type="text"
//   name="message"
//   placeholder="입력하세요."
//   value={this.state.message}
//   onChange={this.handleChange}
//   onKeyPress={this.handleKeyPress}
// />
// <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

import React, { useState } from 'react';

const EventPractice = () => {
  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const onChangeUsername = (e) => setUsername(e.target.value);
  // const onChangeMessage = (e) => setMessage(e.target.value);
  // const onClick = () => {
  //   alert(username + ' : ' + message);
  //   setUsername('');
  //   setMessage('');
  // };
  // const onKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     onClick();
  //   }
  // };

  // input 이 많아질 경우 객체 활용
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존 form 복사
      [e.target.name]: e.target.value, // 변한 값 덮어씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ' : ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <hr />
      <h1>이벤트 연습 - 함수형</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        // onChange={onChangeUsername}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="입력하세요."
        value={message}
        // onChange={onChangeMessage}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
