import { createContext, useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import appReducer from './appReducer'
import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from './actions'

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
    const initialState = {
        tasks: []
    }

    const [state, dispatch] = useReducer(appReducer, initialState)
    const addTask = (task) => {
        dispatch({ type: ADD_TASK, payload: { ...task, id: uuid() } })
    }
    const deleteTask = (id) => {
        const action = confirm('Are you sure to delete this task?')
        if (action) {
            dispatch({ type: DELETE_TASK, payload: id })
        }
    }
    const updateTask = (id, task) => {
        dispatch({ type: UPDATE_TASK, payload: { ...task, id } })
    }
    const { tasks } = state

    const data = { tasks, addTask, deleteTask, updateTask }
    return <TaskContext.Provider value={data}>{children}</TaskContext.Provider>
}

export default TaskContext
export {
    TaskProvider
}