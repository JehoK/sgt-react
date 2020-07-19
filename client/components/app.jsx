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

  getGradeAverage() {
    let sum = 0;
    for (let i = 0; i < this.state.grade.length; i++) {
      sum += this.state.grade[i].grade;
    }
    const average = sum / this.state.grade.length;
    return average;
  }

  render() {
    if (this.state.grade.length === 0) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <Header grades={this.getGradeAverage()}/>
        <GradeTable grades={this.state.grade}/>
      </div>
    );
  }
}
export default App;
