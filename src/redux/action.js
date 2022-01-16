import {DELETE , DONE, ADD} from './actiontype'

export const deleteHandler = (ID) => {
    console.log(ID)
    return{ type:DELETE,
    payload :ID}
}

export const doneHandler = (DATA) =>{
    console.log(DATA)
    return{
        type: DONE,
        payload: DATA
    }
}
export const addHandler = (list) =>{
    console.log(list)
    return{
        type: ADD,
        payload:list
    }
}