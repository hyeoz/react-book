// import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

const App = () => {
  const name = '리액트';
  return (
    <div>
      <h1 className="react">{name}</h1>
      <MyComponent name={name} favNum={333}>
        REACT
      </MyComponent>
      {/* 컴포넌트가 변수를 받는다면 사용할 때 변수를 넘겨주어야 함 */}
      {/* 열고 닫는 태그 사이에 들어가는 값이 children 값이 됨 */}
    </div>
  );
};

export default App;
