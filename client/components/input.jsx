import React from 'react';

function InputField(props) {
  const inputAttributes = {
    name: props.name,
    type: props.type,
    placeholder: props.placeholder,
    onChange: props.onChange,
    className: props.className
  };

  return (
    <input
      name={inputAttributes.name}
      type={inputAttributes.type}
      className={inputAttributes.className}
      placeholder={inputAttributes.placeholder}
      onChange={inputAttributes.onChange} />
  );
}

export default InputField;
