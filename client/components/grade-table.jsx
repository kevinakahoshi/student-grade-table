import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  const grades = props.grades;
  const editCallback = props.edit;
  const deleteCallback = props.delete;
  if (grades.length === 0) {
    return <h3 className="col-md-8">No grades recorded</h3>;
  }
  return (
    <div className="col-md-8">
      <table className="table table-responsive table-striped student-list border grade-table bg-white">
        <thead>
          <tr>
            <th scope="col" className="name-col">
              <h5 className="mb-0 table-header">Name</h5>
            </th>
            <th scope="col" className="course-col">
              <h5 className="mb-0 table-header">Course</h5>
            </th>
            <th scope="col" className="grade-col">
              <h5 className="mb-0 table-header">Grade</h5>
            </th>
            <th scope="col" className="operations-col">
              <h5 className="mb-0 table-header">Operations</h5>
            </th>
          </tr>
        </thead>
        <tbody id="displayArea">
          {
            grades.map(grade =>
              <Grade grade={grade} key={grade.id} edit={editCallback} delete={deleteCallback} />
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default GradeTable;
