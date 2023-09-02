import { createStore,combineReducers } from "redux";

import { listReducer } from "./reducer/listReducer";
import { counterReducer } from "./reducer/counterReducer";

const rootReducer = combineReducers({
    counter:counterReducer,
    list:listReducer
})
  

export const store=createStore(rootReducer)
