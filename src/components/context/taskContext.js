import { createContext, useState } from "react"
import { v4 as uuid } from 'uuid'
const TaskContext = createContext()

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    const createTask = (title, description) =>
        setTasks([...tasks, { title, description, id: uuid() }])

    const updateTask = (id, updatedTask) =>
        setTasks([...tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task)])

    const data = { tasks, createTask, updateTask }

    return (
        <TaskContext.Provider value={data}>
            {children}
        </TaskContext.Provider>
    )
}

export {
    TaskProvider
}

export default TaskContext