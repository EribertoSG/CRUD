
const Modal = ({ children, component }) => {
    return (
        <div className='background' ref={component}>
            <div className="modal">
                {children}
            </div>
        </div>
    )
}

export default Modal
