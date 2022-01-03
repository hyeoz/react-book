// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import EventPractice from './EventPractice';
import MyComponent from './MyComponent';
import Say from './Say';

const App = () => {
  const name = '리액트';
  return (
    <div>
      <h1 className="react">{name}</h1>
      <MyComponent name={name} favNum={333}>
        REACT
      </MyComponent>
      <Counter />
      <Say />
      <EventPractice />
    </div>
  );
};

export default App;
