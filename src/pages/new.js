import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTask } from '../components/customHooks/useTask'


export default function TaskForm() {
    const initialState = {
        title: '',
        description: ''
    }
    const { push, query } = useRouter()

    const { createTask, updateTask, tasks } = useTask()

    const [data, setData] = useState(initialState)
    const { title, description } = data

    const handleSubmit = e => {
        e.preventDefault()
        if (!query.id) {
            createTask(title, description)
        } else {
            updateTask(query.id, data)
        }
        push('/')
    }
    useEffect(() => {
        if (query.id) {
            const task = tasks.find(task => task.id === query.id)
            setData({ title: task.title, description: task.description })
        }
    }, [])

    const handleInputChange = ({ target: { name, value } }) => {
        setData({ ...data, [name]: value })
    }

    return (
        <div>
            <h1>{query.id ? 'Update Task' : 'New Task'}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Name" onChange={handleInputChange} value={data.title} />
                <textarea name="description" id="description" cols="30" rows="10" placeholder="Descriptionn" onChange={handleInputChange} value={data.description}></textarea>
                <button type="submit">{query.id ? 'Update' : 'Create'}</button>
            </form>
            <Link href="/">
                <a>Inicio</a>
            </Link>

        </div>
    )
}