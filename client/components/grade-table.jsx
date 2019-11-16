import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  const grades = props.grades;
  const deleteCallback = props.delete;
  if (grades.length === 0) {
    return <h3>No grades recorded</h3>;
  }
  return (
    <div className="col-sm-8">
      <table className="table table-bordered table-striped student-list border">
        <thead>
          <tr>
            <th scope="col" className="nameCol">
              <h5 className="mb-0">Name</h5>
            </th>
            <th scope="col" className="courseCol">
              <h5 className="mb-0">Course</h5>
            </th>
            <th scope="col" className="gradeCol">
              <h5 className="mb-0">Grade</h5>
            </th>
            <th scope="col" className="operationsCol">
              <h5 className="mb-0">Operations</h5>
            </th>
          </tr>
        </thead>
        <tbody id="displayArea">
          {
            grades.map(grade =>
              <Grade grade={grade} key={grade.id} delete={deleteCallback}/>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default GradeTable;
