import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  const grades = props.grades;
  if (grades.length === 0) {
    return <h3>No grades recorded</h3>;
  }
  return (
    <table className="table table-bordered table-striped student-list border">
      <thead>
        <tr>
          <th scope="col" className="nameCol"><h3 className="mb-0">Name</h3></th>
          <th scope="col" className="courseCol"><h3 className="mb-0">Course</h3></th>
          <th scope="col" className="gradeCol"><h3 className="mb-0">Grade</h3></th>
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
  );
}

export default GradeTable;
