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
    console.log(query)

    const { createTask } = useTask()

    const [data, setData] = useState(initialState)
    const { title, description } = data

    const handleSubmit = e => {
        e.preventDefault()
        createTask(title, description)
        push('/')
    }
    useEffect(() => {
        console.log(query)
    })

    const handleInputChange = ({ target: { name, value } }) => {
        setData({ ...data, [name]: value })
    }

    return (
        <div>
            <h1>New Task</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Name" onChange={handleInputChange} />
                <textarea name="description" id="description" cols="30" rows="10" placeholder="Descriptionn" onChange={handleInputChange}></textarea>
                <button type="submit">Create</button>
            </form>
            <Link href="/">
                <a>Inicio</a>
            </Link>

        </div>
    )
}