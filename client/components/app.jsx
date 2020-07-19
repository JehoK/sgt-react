/* eslint-disable no-console */
import React from 'react';
import GradeTable from './grade-table';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: []
    };
    this.getGrade();
  }

  getGrade() {
    fetch('http://localhost:3000/api/grades').then(
      data => data.json()
    ).then(
      json => {
        this.setState({ grade: json });
      }
    );
  }

  render() {
    if (this.state.grade.length === 0) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <Header grades={this.state.grade}/>
        <GradeTable grades={this.state.grade}/>
      </div>
    );
  }
}
export default App;
