import { createContext } from "react"

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
    let hola = 'hola'
    const data = { hola }
    
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