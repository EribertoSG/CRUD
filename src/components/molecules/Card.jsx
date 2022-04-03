
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
            <button className="button delete" onClick={onDelete}>
                <span>Delete</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="trash"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
            </button>
        </div>
    )
}

export default Card
