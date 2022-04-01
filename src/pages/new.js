import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useTask } from '../components/customHooks/useTask'
import Layout from '../components/pages/layout'


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
        <Layout>
            <div className='form'>
                <h1 className='form__title'>{query.id ? 'Update Task' : 'New Task'}</h1>
                <form onSubmit={handleSubmit} className="form__container">
                    <input type="text" name="title" placeholder="Name" onChange={handleInputChange} value={data.title} />
                    <textarea name="description" id="description" cols="30" rows="10" placeholder="Descriptionn" onChange={handleInputChange} value={data.description}></textarea>
                    <button type="submit" className='button'>{query.id ? 'Update' : 'Create'}</button>
                </form>
            </div>
        </Layout>
    )
}