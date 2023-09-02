import { ADD_NEW_BIRD,REMOVE_BIRD ,BIRD_NAME} from "./actionType"


export const add_new_bird = (bird)=>{
    return{
        type:ADD_NEW_BIRD,
        payload:bird
    }
}

export const bird_name =(birdName)=>{
    return{
        type:BIRD_NAME,
        payload:birdName
    }
}
export const remove_bird =(id)=>{

    return {
        type:REMOVE_BIRD,
        payload:id
    }
}