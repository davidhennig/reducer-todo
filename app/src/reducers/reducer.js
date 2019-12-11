export const initialState = {
  items: [
    {
      item: "Learn about reducers",
      completed: true,
      id: 3892987589
    },
    {
      item: "Don't learn about reducers",
      completed: false,
      id: 5415665416
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
    case "MARK_COMPLETED":
      return {
        ...state,
        items: state.items.map(element => {
          if (element.id === action.payload) {
            return {
              ...element,
              completed: !element.completed
            };
          }
          return element;
        })
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        items: state.items.filter(element => {
          return !element.completed;
        })
      };
    default:
      return state;
  }
};
