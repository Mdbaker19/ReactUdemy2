import User from "../Users/User";
import {useState} from "react";

const UserList = (props) => {

    const [deleteId, setDeleteId] = useState("");

    const filter = (id) => {
        setDeleteId(id);
    }

    const filterList = props.userList.filter(user => user.id !== deleteId);

    const updateUserList = () => {
        props.updateUserList(filterList);
    }

    return (
        <>
            {filterList.map(user => {
                return <User deleteUpdate={updateUserList} deleteUser={filter} key={user.id} name={user.name} age={user.age} id={user.id}/>
            })}
        </>
    )

}

export default UserList;