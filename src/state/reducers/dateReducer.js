const reducer = (state = [], action) => {
  switch (action.type) {
    case "setDate":
      return (state = action.payload);

    default:
      return state;
  }
};

export default reducer;