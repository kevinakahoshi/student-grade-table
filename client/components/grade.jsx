import React from 'react';

function Grade(props) {
  const grade = props.grade;
  return (
    <tr>
      <td scope="col" className="nameCol"><p>{grade.name}</p></td>
      <td scope="col" className="courseCol"><p>{grade.course}</p></td>
      <td scope="col" className="gradeCol"><p>{grade.grade}</p></td>
    </tr>
  );
}

export default Grade;
