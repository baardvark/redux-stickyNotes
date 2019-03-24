import React from "react";
import { connect, } from "react-redux";

class StickForm extends React.Component {
  state = { name: "", };

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, } = this.state;
    const { id, dispatch, } = this.props;
    const stick = { name, id, complete: false, };
    dispatch({ type: "ADD_Stick", stick, });
    dispatch({ type: "INC_ID", });
    this.setState({ name: "", });
  }

  render() {
    const { name, } = this.state;

    return (
      <div>
        <h3>Add A Sticky Note</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange} />
        </form>
      </div>
    )   
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId, };
}

export default connect(mapStateToProps)(StickForm);
