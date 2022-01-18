import logo from "./logo.svg";
import "./App.css";
import React, { Suspense, useState } from "react";
// import notufy from "./notify";
import loadable from "@loadable/component";

const SplitMe = loadable(() => import("./SplitMe"));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    // notufy();
    // import("./notify").then((result) => result.default());
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {/* <Suspense fallback={<div>loading...</div>}> */}
        {/* fallback 으로 로딩중일때 화면 설정할 수 있음 */}
        {visible && <SplitMe />}
        {/* </Suspense> */}
      </header>
    </div>
  );
}

// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     SplitMe: null,
//   };
//   handleClick = async () => {
//     const loadedModule = await import("./SplitMe");
//     this.setState({
//       SplitMe: loadedModule.default,
//     });
//   };
//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div className="App">
//         <header className="App=header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handleClick}>Hello React2</p>
//           {SplitMe && <SplitMe />}
//         </header>
//       </div>
//     );
//   }
// }

export default App;
