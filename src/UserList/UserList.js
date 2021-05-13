import { useState } from "react";
import User from "../Users/User";

const UserList = (props) => {


    return (
        <>
            {props.userList.map(user => {
                return <User key={user.id} name={user.name} age={user.age} id={user.id}/>
            })}
        </>
    )

}

export default UserList;