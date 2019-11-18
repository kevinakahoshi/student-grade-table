import React from 'react';

function GradeInputElement(props) {
  const textValue = props.value;
  const currentState = props.state.changeGrade;
  const changeCallback = props.changeCallback;
  const inputType = typeof (textValue);
  const placeholderText = props.name.substring(0, 1).toUpperCase() + props.name.substring(1);
  let regexPattern = null;
  let inputClass = null;

  if (inputType === 'number') {
    regexPattern = /[1-9]/g;
  } else {
    regexPattern = /[A-Za-z]/g;
  }

  if (textValue.length < 3) {
    inputClass = 'mb-0 form-control inputPlaceholder is-invalid';
  } else {
    inputClass = 'mb-0 form-control inputPlaceholder';
  }

  if (inputType === 'number' && isNaN(textValue)) {
    inputClass = 'mb-0 form-control inputPlaceholder is-invalid';
  } else if (textValue > 100) {
    inputClass = 'mb-0 form-control inputPlaceholder is-invalid';
  }

  if (currentState) {
    return <input name={props.name} className={inputClass} placeholder={placeholderText} onChange={event => {
      changeCallback(event.target.value);
    }} type={inputType} value={props.value} pattern={regexPattern} />;
  }
  return <p className="mb-0">{textValue}</p>;
}

export default GradeInputElement;
