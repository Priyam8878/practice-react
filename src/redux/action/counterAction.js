import { type } from "@testing-library/user-event/dist/type";
import { INCRIMENT,DECRIMENT,RESET} from "./actionType";


export const increment=()=>{
    return{
        type:INCRIMENT
    }
}
export const decrement=()=>{
    return {
        type:DECRIMENT
    }
}
export const reset=()=>{
    return {
        type:RESET
    }
}
