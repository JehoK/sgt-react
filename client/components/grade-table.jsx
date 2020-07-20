import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {

  render() {
    return (
      <table className="table table-striped col-8">
        <thead className="table-dark">
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {this.props.grades.length !== 0
            ? this.props.grades.map(grade => {
              return <Grade key={grade.id} grade={grade} delete={this.props.delete}/>;
            })
            : <tr>
              <td>
                  No Grades Recorded.
              </td>
            </tr>
          }
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
