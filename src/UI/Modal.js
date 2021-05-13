const Modal = (props) => {

    const dismissModal = () => {

    }

    return (
        <>
            <div className="modal" style={{display: "block"}}>
                <p>{props.message}</p>
                <button onClick={dismissModal}>Okay</button>
            </div>
        </>
    )
}

export default Modal;