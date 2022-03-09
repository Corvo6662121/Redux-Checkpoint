import { ADD_TASK,EDIT_TASK, DELETE_TASK, DONE_TASK } from "../constant/actionsTypes";

const initialState = {
    listTask : [{id:1,
                 text:"hello world",
                 isDone:false}
    ]
}

const TaskReducer = (state = initialState , {type,payload})=>{
    switch (type) {
        case ADD_TASK:
            return {...state,listTask:[...state.listTask,payload]};
            case EDIT_TASK:
                return {...state,listTask:state.listTask.map((el)=>el.id === payload.id ? {...el, text:payload.newTask}:el)};
                case DELETE_TASK:
                    return { ...state, listTask:state.listTask.filter((el)=>el.id !== payload)}
                    case DONE_TASK:
                        return {
                            ...state,
                            listTask:state.listTask.map(el=>el.id === payload ? {...el, isDone: !el.isDone} :el)
                        }
        default:
            return state;
    }
};


export default  TaskReducer;