import { INCRIMENT, DECRIMENT, RESET } from "../action/actionType";
const initialState = [];
// if (initialState<=0){
//     initialState=0}
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCRIMENT:
      return state + 1;
    case DECRIMENT:
      return state - 1;

    case RESET:
      return initialState;
    default:
      return state;
  }
};
