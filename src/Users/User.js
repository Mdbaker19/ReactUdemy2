import { useState } from "react";
import './User.css';

const User = (props) => {

    // const { user } = props; // did not work like i thought user.name, user.age

    return (
        <>
            <div className="card userCard">

                <p>{props.name}</p>
                <p>{props.age} years old</p>

            </div>

        </>
    )

}

export default User;