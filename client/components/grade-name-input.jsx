import React from 'react';

function GradeInputElement(props) {
  const textValue = props.value;
  const currentState = props.state.changeGrade;
  const changeCallback = props.changeCallback;
  const inputType = typeof (textValue);
  if (currentState) {
    return <input name={props.name} className="mb-0 form-control inputPlaceholder" placeholder={textValue} onChange={() => {
      changeCallback(event);
    }} type={inputType} />;
  }
  return <p className="mb-0">{textValue}</p>;
}

export default GradeInputElement;
