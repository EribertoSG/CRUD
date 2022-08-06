import { useState } from "react"

const Form = () => {
    const initialState = {
        title: '',
        description: ''
    }
    const [data, setData] = useState(initialState)
    const handleChange = ({ target: { name, value } }) => {
        setData({ ...data, [name]: value })
    }

    return (
        <div className="form__container">
            <h1>Form</h1>
            <form className="form">
                <input className="input" type="text" name="title" id="title" placeholder="Title" onChange={handleChange} />
                <textarea className="textarea" name="description" id="description" cols="30" rows="10" placeholder="Description" onChange={handleChange}></textarea>
                <button className="button full" type='submit'>add</button>
            </form>
        </div>
    )
}

export default Form
