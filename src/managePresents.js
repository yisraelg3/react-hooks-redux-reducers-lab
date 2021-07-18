export function managePresents(state={numberOfPresents: 0}, action) {
  switch (action.type) {
    case "presents/increase":
      return {numberOfPresents: state.numberOfPresents + 1}
  }
}


// function reducer(state, action) {
//   switch (action.type) {
//     case "counter/increment":
//       return { count: state.count + 1 };
//     case "counter/decrement":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// } 
