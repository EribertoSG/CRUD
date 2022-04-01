
const Card = ({ index, title, description, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <span className="card__index">{index}</span>
            <div className="card__body">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
            </div>
            <button className="card__button">Delete</button>
        </div>
    )
}

export default Card
