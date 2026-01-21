import { react, Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
      </div>
    );
  }
}
