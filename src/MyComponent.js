// import PropTypes from 'prop-types';

// // Function Component
// const MyComponent = (props) => {
//   const { name, children, favNum } = props;
//   return (
//     <div>
//       안녕하세요. 제 이름은 {name}입니다. <br />
//       children 값은 {children} 입니다. <br />
//       가장 좋아하는 숫자는 {favNum} 입니다.
//     </div>
//   );
// };

// Class Component
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: 'default name',
  };

  static propTypes = {
    name: PropTypes.string,
    favNum: PropTypes.number.isRequired,
  };

  render() {
    const { name, favNum, children } = this.props; // this. 사용, 비구조화 할당
    return (
      <div>
        안녕하세요. 제 이름은 {name}입니다. <br />
        children 값은 {children} 입니다. <br />
        가장 좋아하는 숫자는 {favNum} 입니다.
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: 'default name',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favNum: PropTypes.number.isRequired,
// };

export default MyComponent;
