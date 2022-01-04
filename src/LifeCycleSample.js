import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;
  constructor(props) {
    super(props);
    console.log('-constructor-');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('-getDerivedStateFromProps-');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('-componentDidMount-');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('-shouldComponentUpdate-', nextProps, nextState);
    return nextState.number % 10 !== 4; // 일의자리가 4면 리렌더링 하지 않음. true/false로 출력되도록 코딩
  }

  componentWillUnmount() {
    console.log('-componentWillUnmount-');
  }

  handleClick = () => {
    // 1씩 늘어나도록
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('-getSnapshotBeforeUpdate-');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshop) {
    console.log('-componentDidUpdate-');
    if (snapshop) {
      console.log('업데이트 되기 직전 색상 : ', snapshop);
    }
  }

  render() {
    console.log('-render-');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {this.props.missing.value} {/* 일부러 에러 발생 */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
