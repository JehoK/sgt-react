import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <header className="row justify-content-between">
        <h1 className="col-6">Student Grade Table</h1>
        <h3 className="col-3">Average Grade<span className="badge badge-secondary">{this.props.average}</span></h3>
      </header>
    );
  }
}

export default Header;
