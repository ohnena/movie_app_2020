import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 })); //다이렉트로 state에 접근하는건 안된다!
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 })); //다이렉트로 state에 접근하는건 안된다!
  };
  componentDidMount() {
    console.log("Component rendered");  //컴포넌트 Mount(생성) 마지막단계에 호출..
  }
  componentDidUpdate() {
    console.log("I just updated");      //컴포넌트 Update 마지막단계에 호출..
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");  //컴포넌트 Unmount 마지막단계에 호출..
  }
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
