import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTask } from '../components/customHooks/useTask'


export default function TaskForm() {
    const initialState = {
        name: '',
        description: ''
    }
    const router = useRouter()

    const { createTask } = useTask()

    const [data, setData] = useState(initialState)
    const { name, description } = data

    const handleSubmit = e => {
        e.preventDefault()
        createTask(name, description)
        router.push('/')
    }
    const handleInputChange = ({ target: { name, value } }) => {
        setData({ ...data, [name]: value })
    }

    return (
        <div>
            <h1>New Task</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
                <textarea name="description" id="description" cols="30" rows="10" placeholder="Descriptionn" onChange={handleInputChange}></textarea>
                <button type="submit">Create</button>
            </form>
            <div>
                <span>{data.name}</span>
                <span>{data.description}</span>
            </div>
        </div>
    )
}