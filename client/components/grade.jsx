import React from 'react';

function Grade(props) {
  const grade = props.grade;
  return (
    <tr>
      <td scope="col" className="nameCol"><p className="mb-0">{grade.name}</p></td>
      <td scope="col" className="courseCol"><p className="mb-0">{grade.course}</p></td>
      <td scope="col" className="gradeCol"><p className="mb-0">{grade.grade}</p></td>
    </tr>
  );
}

export default Grade;
