import React from 'react';

function Header(prop) {
  const averageGrade = prop.averageGrade;
  return (
    <div className="page-header media-heading row align-middle" >
      <h1 className="col-sm-8 d-inline-block">Student Grade Table</h1>
      <h4 className="col-sm-4 text-right">Average Grade: <span className="badge badge-secondary">{averageGrade}</span></h4>
    </div>
  );
}

export default Header;
