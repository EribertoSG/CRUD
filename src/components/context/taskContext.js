import { createContext, useState } from "react"

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([{ name: 'Hello from provider' }])

    const createTask = (name, description) => {
        setTasks([...tasks, { name, description }])
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