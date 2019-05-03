import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    return (
      <li className="item">
        {this.props.task}
        <button onClick={this.props.delete} className="btn-del">
          -
        </button>
      </li>
    );
  }
}
