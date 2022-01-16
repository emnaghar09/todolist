import {DELETE , DONE} from './actiontype'
const initialState = {
    task:[
        {name:'task1',isDone:true,id:1},
        {name:'task2',isDone:false,id:2},
        {name:'task3',isDone:false,id:3},
    ]


}
export const todoReducer = (state=initialState, action) =>{
    switch (action.type) {
        case DELETE : return { ...state,
            task: state.task.filter((task) => task.id !== action.payload)
        }
        case DONE: 
        return{
            ...state,
            task:action.payload.map((task) => task)
        }
        case ADD: return{
            ...state,
            task:action.payload.map((task) => task)
        
        }
    default: return state
}

}