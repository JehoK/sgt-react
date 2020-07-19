import React from 'react';

class Header extends React.Component {

  render() {
    let sum = 0;
    for (let i = 0; i < this.props.grades.length; i++) {
      sum += this.props.grades[i].grade;
    }
    const average = sum / this.props.grades.length;
    return (
      <header className="row justify-content-between">
        <h1 className="col-6">Student Grade Table</h1>
        <h3 className="col-3">Average Grade<span className="badge badge-secondary">{average}</span></h3>
      </header>
    );
  }
}

export default Header;
