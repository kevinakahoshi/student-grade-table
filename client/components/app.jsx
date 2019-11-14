import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
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
    return (
      <div className="container gradeTable">
        <Header />
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
