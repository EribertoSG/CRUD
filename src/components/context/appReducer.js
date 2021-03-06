import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./actions";

export default function appReducer(state, { type, payload }) {
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
            return {
                tasks: state.tasks.map(task => task.id == payload.id ? { ...state.task, ...payload } : task)
            }

        default:
            state
            break
    }
}