import { useState } from "react"
import { useRouter } from "next/router"
import useTask from "../hooks/useTask"

const Form = () => {
    const initailState = {
        title: '',
        description: ''
    }
    const { addTask } = useTask()
    const { push, query } = useRouter()

    const [formData, setFormData] = useState(initailState)

    const handleInputChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (e.target.title.value === '' || e.target.description.value === '') {
            alert('Please fill out all fields')
        } else {
            if (query) {
                console.log('Editing')
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
                <input className="input" type="text" name="title" id="title" placeholder="Title" onChange={handleInputChange} />
                <textarea className="textarea" name="description" id="description" cols="30" rows="10" placeholder="Description" onChange={handleInputChange}></textarea>
                <button className="button full" type='submit'>{action}</button>
            </form>
        </div>
    )
}

export default Form
