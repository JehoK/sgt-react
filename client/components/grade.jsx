/* eslint-disable no-useless-constructor */

import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.grade.name}</td>
        <td>{this.props.grade.course}</td>
        <td>{this.props.grade.grade}</td>
      </tr>
    );
  }
}

export default Grade;
