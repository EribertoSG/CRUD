const Card = ({ index, task, onDelete, onEdit }) => {
    return (
        <div className='card'>
            <span className="index">{index}</span>
            <div className="card__body">
                <h3 className="card__title">{task.title}</h3>
                <div className="card__description">
                    <p className='card__text'>{task.description}</p>
                </div>
            </div>
            <div className="card__footer">
                <button className='button edit' onClick={onEdit}>Edit</button>
                <button className='button delete' onClick={onDelete} >Delete</button>
            </div>
        </div>
    )
}

export default Card
