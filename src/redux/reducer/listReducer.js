import { ADD_NEW_BIRD, REMOVE_BIRD,BIRD_NAME } from "../action/actionType";

const birdArray = [];
export const listReducer = (state = birdArray, action) => {
  switch (action.type) {
    case ADD_NEW_BIRD:
      return [...state, action.payload];
    case REMOVE_BIRD:
      return state.filter((item) => item.id !== action.payload);
    
    default:
      return state;
  }
};
