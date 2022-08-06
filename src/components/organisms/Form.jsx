const Form = () => {
    return (
        <div className="form__container">
            <h1>Form</h1>
            <form className="form">
                <input className="input" type="text" name="title" id="title" placeholder="Title" />
                <textarea className="textarea" name="description" id="description" cols="30" rows="10" placeholder="Description"></textarea>
                <button className="button full" type='submit'>add</button>
            </form>
        </div>
    )
}

export default Form
