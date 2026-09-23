import React from 'react';

function Button(props) {
  return (
    <button
      style={{
        backgroundColor: props.btnColor,
        color: props.Text
      }}
      onClick={props.onClick}
    >
      {props.btnName}
    </button>
  );
}

export default Button;