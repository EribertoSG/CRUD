import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./actions";

export default function appReducer(state, { type, payload }) {
    console.log('desde reducer: ', payload);
    switch (type) {
        case ADD_TASK:
            return {
                tasks: [...state.tasks, payload]
            }
        case DELETE_TASK:
            return {
                tasks: state.tasks.filter(task => task.id !== payload)
            }
        case UPDATE_TASK:
            
        default:
            state
            break;
    }
}