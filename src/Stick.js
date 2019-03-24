import React from "react";
import { connect, } from "react-redux";

const Stick = ({ id, name, complete, dispatch }) => (
  <li
    onClick={() => dispatch({ type: "TOGGLE_Stick", id, })}
    style={ complete ? { textDecoration: "line-through", color: "grey" } : {} }
  >
    { name }
  </li>
)

export default connect()(Stick);
