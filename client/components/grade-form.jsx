import React from 'react';
import InputField from './input';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitGrade = this.props.submit;
    this.state = {
      name: '',
      course: '',
      grade: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit() {
    const newGrade = this.state;
    newGrade.grade = parseInt(newGrade.grade);
    this.submitGrade(newGrade);
  }

  render() {
    return (
      <div className="col-sm-4">
        <form className="sticky-top" onSubmit={this.handleSubmit}>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-user fa-fw"></i>
              </div>
            </div>
            <InputField
              name="name"
              type="text"
              placeholder="Name"
              className="form-control"
              onChange={this.handleChange} />
          </div>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="far fa-list-alt fa-fw"></i>
              </div>
            </div>
            <InputField
              name="course"
              type="text"
              placeholder="Course"
              className="form-control"
              onChange={this.handleChange} />
          </div>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-user-graduate fa-fw"></i>
              </div>
            </div>
            <InputField
              name="grade"
              type="number"
              placeholder="Grade"
              className="form-control"
              onChange={this.handleChange}/>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary mr-2">Add Student</button>
            <button type="reset" className="btn btn-secondary mr-0">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default GradeForm;
