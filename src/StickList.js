import React from "react";
import { connect, } from "react-redux";
import Stick from "./Stick";

const StickList = ({ sticks }) => (
  <ul>
    { sticks.map( t => 
      <Stick key={t.id} {...t} />
    )}
  </ul>
)

const mapStateToProps = (state) => {
  return { sticks: state.sticks, };
}

export default connect(mapStateToProps)(StickList);
