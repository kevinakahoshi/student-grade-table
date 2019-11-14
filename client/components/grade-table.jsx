import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  const grades = props.grades;
  if (grades.length === 0) {
    return <h3>No grades recorded</h3>;
  }
  return (
    <div className="student-list-container media-heading table-responsive">
      <table className="table table-bordered table-striped student-list col-sm-12">
        <thead>
          <tr>
            <th scope="col" className="nameCol"><p>Name</p></th>
            <th scope="col" className="courseCol"><p>Course</p></th>
            <th scope="col" className="gradeCol"><p>Grade</p></th>
          </tr>
        </thead>
        <tbody id="displayArea">
          {
            grades.map(grade =>
              <Grade grade={grade} key={grade.id} />
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default GradeTable;
