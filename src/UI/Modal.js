import './Modal.css';

const Modal = (props) => {

    const dismissModal = () => {
        props.dismiss(false);
    }

    return (
        <>
            <div className="modal">
                <p>{props.message}</p>
                <button className="btn" onClick={dismissModal}>Okay</button>
            </div>
        </>
    )
}

export default Modal;