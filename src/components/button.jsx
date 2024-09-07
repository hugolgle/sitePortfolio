import React from "react";
import "./button.scss";

export default function Button(props) {
  return (
    <button
      type="submit"
      className={props.className}
      onClick={props.action}
      value={props.value}
    >
      {props.title}
    </button>
  );
}
