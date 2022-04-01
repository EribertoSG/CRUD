
const Card = ({ index, title, description, onClick, onDelete }) => {
    return (
        <div className="card" onClick={onClick}>
            <span className="card__index">{index}</span>
            <div className="card__body">
                <h3 className="title">{title}</h3>
                <div className="card__description">
                    <p className="text">{description}</p>
                </div>
            </div>
            <button className="button delete" onClick={onDelete}>Delete</button>
        </div>
    )
}

export default Card
