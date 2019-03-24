const sticks = (state = [], action) => {
  switch(action.type) {
    case "StickS":
      return action.sticks;
    case "ADD_Stick":
      return [action.stick, ...state];
    case "TOGGLE_Stick":
      return state.map( stick => {
        if (stick.id === action.id)
          return { ...stick, complete: !stick.complete, };
        return stick;
      })
    default:
      return state;
  }
};

export default sticks;


