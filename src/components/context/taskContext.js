import { createContext, useState } from "react"
import { v4 as uuid } from 'uuid'
const TaskContext = createContext()

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([{ name: 'Hello from provider' }])

    const createTask = (name, description) => {
        setTasks([...tasks, { name, description, id: uuid() }])
    }

    const data = { tasks, createTask }

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