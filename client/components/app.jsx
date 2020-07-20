/* eslint-disable no-console */
import React from 'react';
import GradeTable from './grade-table';
import Header from './header';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
    this.getGrade();
  }

  getGrade() {
    fetch('http://localhost:3000/api/grades').then(
      data => data.json()
    ).then(
      json => {
        this.setState({ students: json });
      }
    );
  }

  createGrade(name, course, grade) {
    const myHeaders = new Headers();
    myHeaders.append('content-type', 'application/json');
    fetch('http://localhost:3000/api/grades', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        name: name,
        grade: grade,
        course: course
      })
    }).then(
      data => data.json()
    ).then(
      json => this.setState({ students: this.state.students.concat(json) })
    );
  }

  getGradeAverage() {
    const sum = this.state.students.reduce((sum, current) => {
      return sum + current.grade;
    }, 0);
    return sum / this.state.students.length;
    /*
    let sum = 0;
    for (let i = 0; i < this.state.grade.length; i++) {
      sum += this.state.grade[i].grade;
    }
    const average = sum / this.state.grade.length;
    return average;
    */
  }

  render() {
    if (this.state.students.length === 0) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <Header average={this.getGradeAverage()}/>
        <div className="row justify-content-between">
          <GradeTable className="table" grades={this.state.students} />
          <GradeForm className="form" create={this.createGrade.bind(this)} />
        </div>
      </div>
    );
  }
}
export default App;
