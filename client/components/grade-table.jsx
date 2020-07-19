import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {

  render() {
    return (
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {this.props.grades.length !== 0
            ? this.props.grades.map(grade => {
              return <Grade key={grade.id} grade={grade}/>;
            })
            : <p>No Grades Recorded.</p>
          }
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
