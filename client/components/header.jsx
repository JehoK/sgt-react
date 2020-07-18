/* eslint-disable no-useless-constructor */

import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h1>Student Grade Table</h1>
      </header>
    );
  }
}

export default Header;
