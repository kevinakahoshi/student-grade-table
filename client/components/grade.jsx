import React from 'react';
import GradeInputElement from './grade-name-input';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeGrade: false,
      name: props.grade.name,
      course: props.grade.course,
      grade: props.grade.grade,
      id: props.grade.id
    };
    this.editCallback = props.edit;
    this.deleteCallback = props.delete;
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

  getChangedValues(value) {
    this.setState({ [event.target.name]: value });
    if (isNaN(this.state.grade)) {
      this.setState({ grade: 0 });
    }
  }

  changeGrade() {
    const updatedGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: parseInt(this.state.grade),
      id: this.state.id
    };
    if (updatedGrade.name && updatedGrade.name.length > 2 && updatedGrade.course && updatedGrade.grade > -1 && updatedGrade.grade < 101) {
      this.setState({ changeGrade: !this.state.changeGrade });
      this.editCallback(updatedGrade);
    }
  }

  render() {
    const editIcon = this.getIcon();
    return (
      <tr>
        <td scope="col" className="nameCol">
          <GradeInputElement name="name" value={this.state.name} state={this.state} changeCallback={this.getChangedValues} />
        </td>
        <td scope="col" className="courseCol">
          <GradeInputElement name="course" value={this.state.course} state={this.state} changeCallback={this.getChangedValues}/>
        </td>
        <td scope="col" className="gradeCol">
          <GradeInputElement name="grade" value={parseInt(this.state.grade)} state={this.state} changeCallback={this.getChangedValues} />
        </td>
        <td scope="col" className="operationsCol">
          <div className="btn-group d-flex">
            <button className="btn btn-outline-info w-50" onClick={this.changeGrade}><i className={editIcon}></i></button>
            <button className="btn btn-outline-danger w-50" onClick={() => this.deleteCallback(this.state.id)}><i className="fas fa-user-minus"></i></button>
          </div>
        </td>
      </tr>
    );
  }
}

export default Grade;
