import './User.css';

const User = (props) => {

    const { name, age } = props;

    const deleteUser = () => {
        props.deleteUser(props.id);
        props.deleteUpdate();
    }

    return (
        <>
            <div onClick={deleteUser} className="card userCard">
                <p>{name}</p>
                <p>{age} years old</p>
            </div>
        </>
    )
}

export default User;