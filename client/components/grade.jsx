import React from 'react';

class Grade extends React.Component {

  deleteGrade() {
    fetch('http://localhost:3000/api/grade');
  }

  render() {
    const that = this;
    return (
      <tr>
        <td>{this.props.grade.name}</td>
        <td>{this.props.grade.course}</td>
        <td>{this.props.grade.grade}</td>
        <td><button className="btn btn-danger" onClick={function () { that.props.delete(that.props.grade.id); }}>Delete</button></td>
      </tr>
    );
  }
}

export default Grade;
