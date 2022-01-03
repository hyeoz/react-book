import React, { Component } from 'react';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   // state 의 초기값 설정하기
  //   this.state = {
  //     number: 0,
  //     fixedNum: 0,
  //   };
  // }
  state = {
    number: 0,
    fixedNum: 0,
  };
  render() {
    const { number, fixedNum } = this.state;
    return (
      <div>
        <hr />
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNum}</h2>
        <button
          // onClick 함수 직접 생성
          onClick={() => {
            // setState 로 state에 새로운 값 넣기
            // this.setState({ number: number + 1 });

            // 아래 두 경우는 같은 의미
            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));

            // 상태 업데이트 후 특정 작업 -> 콜백함수 사용
            this.setState(
              {
                // 바로 객체 값을 변화시킬 수 있음
                number: number + 1,
              },
              () => {
                console.log('방금 setState 가 호출되었습니다.');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
