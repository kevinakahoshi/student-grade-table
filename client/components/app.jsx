import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.submitGrade = this.submitGrade.bind(this);
  }

  getAverageGrade() {
    let totalStudentGrade = 0;
    this.state.grades.map(student => {
      totalStudentGrade = totalStudentGrade + student.grade;
    });
    const averageGrade = totalStudentGrade / this.state.grades.length;
    return Math.round(averageGrade);
  }

  submitGrade() {
    return null;
  }

  componentDidMount() {
    const request = '/api/grades';
    const initObj = {
      'method': 'GET'
    };

    fetch(request, initObj)
      .then(response => { return response.json(); })
      .then(data => { this.setState({ grades: data }); })
      .catch(error => { console.error('There was an error:', error.message); });
  }

  render() {
    const averageGrade = this.getAverageGrade();
    return (
      <div className="container gradeTable py-5">
        <Header averageGrade={averageGrade}/>
        <div className="row">
          <GradeTable grades={this.state.grades}/>
          <GradeForm submit={this.submitGrade} />
        </div>
      </div>
    );
  }
}

export default App;
