import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import useTask from "../hooks/useTask"

const Form = () => {
    const initailState = {
        title: '',
        description: ''
    }
    const { addTask, updateTask, tasks } = useTask()
    const { push, query } = useRouter()

    const [formData, setFormData] = useState(initailState)
    console.log(formData)
    useEffect(() => {
        const { title, description } = tasks.find(task => task.id == query.id)
        setFormData({ title, description })
    }, [])

    const handleInputChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (e.target.title.value === '' || e.target.description.value === '') {
            alert('Please fill out all fields')
        } else {
            if (query.id) {
                updateTask(query.id, formData)
            } else {
                addTask(formData)
            }
            push('/')
        }
    }
    const action = query.id ? 'Update' : 'Create'
    return (
        <div className="form__container">
            <h1>{action}</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input className="input" type="text" name="title" id="title" placeholder="Title" value={formData.title} onChange={handleInputChange} />
                <textarea className="textarea" name="description" id="description" cols="30" rows="10" value={formData.description} placeholder="Description" onChange={handleInputChange}></textarea>
                <button className="button full" type='submit'>{action}</button>
            </form>
        </div>
    )
}

export default Form
