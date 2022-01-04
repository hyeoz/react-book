// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import LifeCycleSample from './LifeCycleSample';
// import IterationSample from './IterationSample';
// import ScrollBox from './ScrollBox';
// import Counter from './Counter';
// import EventPractice from './EventPractice';
// import MyComponent from './MyComponent';
// import Say from './Say';
// import ValidationSample from './ValidationSample';

// const App = () => {
//   const name = '리액트';
//   return (
//     <div>
//       <h1 className="react">{name + 'chapter 3 - 4'} </h1>
//       <MyComponent name={name} favNum={333}>
//         REACT
//       </MyComponent>
//       <Counter />
//       <Say />
//       <EventPractice />
//     </div>
//   );
// };

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1 className="react">리액트 chapter 5 - 6</h1>
//         <ValidationSample />
//         <hr />
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)} />{' '}
//         {/* 컴포넌트 단위에서 ref설정 */}
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           {' '}
//           {/* 컴포넌트 단위 ref -> DOM 단위 ref 접근 */}
//           To Botton
//         </button>
//         <hr />
//         <IterationSample />
//       </div>
//     );
//   }
// }

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16); // 16진법으로 바꿔서 랜덤컬러 출력
};

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <h1 className="react">리액트 chap. 7</h1>
        <button onClick={this.handleClick}>랜덤컬러</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
