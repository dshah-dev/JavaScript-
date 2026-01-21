import { React, Component } from "react";
import Counter from "./Counter";

export default class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("when render first time use didMount");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    console.log("Render from here");
    return (
      <>
        <Counter number={this.state.count} />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </>
    );
  }
}

// class MountClass extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
//     render() {
//         return <div>{this.state.count}</div>;
//     }

//         //   render() {
// //     return <h1>Hello World</h1>;
// //     }
// }

// export default MountClass;
