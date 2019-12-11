export const initialState = {
  items: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TODO":
      const newObject = {
        items: [
          ...state.items,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };
      return newObject;
    case "CLEAR_COMPLETED":
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

// removeItem = () => {
//     this.setState({
//       data: this.state.data.filter(element => {
//         return !element.completed;
//       })
//     });
//   };
