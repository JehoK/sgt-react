import React from 'react';

class GradeForm extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newName = formData.get('name');
    const newCourse = formData.get('course');
    const newGrade = Number(formData.get('grade'));

    this.props.create(newName, newCourse, newGrade);
    event.target.reset();
  }

  render() {
    return (
      <form className="col-3" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-text"><i className="fas fa-user"></i></span>
            <input type="text" className="form-control" name="name" placeholder="Name"/>
          </div>
          <div className="input-group">
            <span className="input-group-text"><i className="far fa-list-alt"></i></span>
            <input type="text" className="form-control" name="course" placeholder="Course"/>
          </div>
          <div className="input-group">
            <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
            <input type="text" className="form-control" name="grade" placeholder="Grade" />
          </div>
        </div>
        <div className="btnss">
          <button type="submit" className="btn btn-primary">Add</button>
          <button type="reset" className="btn btn-light" >Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
