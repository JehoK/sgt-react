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

  delete(id) {
    fetch(`http://localhost:3000/api/grades/${id}`, {
      method: 'DELETE'
    });
    const index = this.state.students.findIndex(student => student.id === id);
    this.setState({ students: this.state.students.slice(0, index).concat(this.state.students.slice(index + 1)) });
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
    if (sum === 0) {
      return 0;
    } else {
      return Math.floor(sum / this.state.students.length);
    }
  }

  render() {
    return (
      <div>
        <Header average={this.getGradeAverage()}/>
        <div className="row justify-content-between">
          <GradeTable className="table" grades={this.state.students} delete={this.delete.bind(this)} />
          <GradeForm className="form" create={this.createGrade.bind(this)} />
        </div>
      </div>
    );
  }
}
export default App;
