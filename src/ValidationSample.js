import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validation: false,
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    let validation = this.state.password === '0604';
    let password = validation ? this.state.password : '';
    this.setState({
      clicked: true,
      validation,
      password,
    });
    // Q. 비밀번호 틀리면 리셋하고 안틀리면 그대로 두고 싶을 땐 어떡하죵
    this.input.focus(); // 버튼 눌러도 포커스가 사라지지 않고 인풋 창에 포커스 돌아오도록
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => {
            this.input = ref;
          }}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validation
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>Checking password</button>
      </div>
    );
  }
}

export default ValidationSample;
