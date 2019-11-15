import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitGrade = this.props.submit;
    this.state = {
      fields: ''
    };
  }
  render() {
    return (
      <div className="col-sm-4">
        <form onSubmit={this.submitGrade}>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <i className="fas fa-user input-group-text"></i>
            </div>
            <input type="text" className="form-control" placeholder="Name"/>
          </div>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <i className="far fa-list-alt input-group-text"></i>
            </div>
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <i className="fas fa-user-graduate input-group-text"></i>
            </div>
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <button type="submit" className="btn btn-primary mr-2">Add</button>
          <button type="submit" className="btn btn-secondary">Cancel</button>
        </form>
      </div>
    );
  }
}

export default GradeForm;
