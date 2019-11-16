import React from 'react';

function Grade(props) {
  const deleteCallback = props.delete;
  const grade = props.grade;
  return (
    <tr>
      <td scope="col" className="nameCol">
        <p className="mb-0">{grade.name}</p>
      </td>
      <td scope="col" className="courseCol">
        <p className="mb-0">{grade.course}</p>
      </td>
      <td scope="col" className="gradeCol">
        <p className="mb-0">{grade.grade}</p>
      </td>
      <td scope="col" className="gradeCol">
        <button className="btn btn-danger" onClick={() => deleteCallback(grade.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Grade;
