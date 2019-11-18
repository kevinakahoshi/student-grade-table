import React from 'react';
import GradeInputElement from './grade-name-input';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeGrade: false,
      name: '',
      course: '',
      grade: null,
      id: props.grade.id
    };
    this.editCallback = props.edit;
    this.deleteCallback = props.delete;
    this.grade = props.grade.grade;
    this.id = props.grade.id;
    this.name = props.grade.name;
    this.course = props.grade.course;
    this.changeGrade = this.changeGrade.bind(this);
    this.getIcon = this.getIcon.bind(this);
    this.getChangedValues = this.getChangedValues.bind(this);
  }

  getIcon() {
    if (this.state.changeGrade) {
      return 'fas fa-check-square';
    }
    return 'fas fa-edit info';
  }

  getChangedValues(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  changeGrade() {
    const updatedGrade = this.state;
    updatedGrade.grade = parseInt(updatedGrade.grade);
    if (updatedGrade.changeGrade) {
      this.editCallback(updatedGrade);
    }
    this.setState({ changeGrade: !this.state.changeGrade });
  }

  render() {
    const editIcon = this.getIcon();
    return (
      <tr>
        <td scope="col" className="nameCol">
          <GradeInputElement name="name" value={this.name} state={this.state} changeCallback={this.getChangedValues} />
        </td>
        <td scope="col" className="courseCol">
          <GradeInputElement name="course" value={this.course} state={this.state} changeCallback={this.getChangedValues}/>
        </td>
        <td scope="col" className="gradeCol">
          <GradeInputElement name="grade" value={this.grade} state={this.state} changeCallback={this.getChangedValues} />
        </td>
        <td scope="col" className="gradeCol justify-content-end">
          <div className="btn-group">
            <button className="btn btn-secondary" onClick={this.changeGrade}><i className={editIcon}></i></button>
            <button className="btn btn-danger" onClick={() => this.deleteCallback(this.id)}><i className="fas fa-user-minus"></i></button>
          </div>
        </td>
      </tr>
    );
  }
}

export default Grade;
