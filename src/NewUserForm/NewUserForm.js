import { useState } from "react";
import './NewUserForm.css';

const NewUserForm = (props) => {

    const [userInput, setUserInput] = useState([
        {name: "", age: ""}
    ]);

    const addUserHandler = (e) => {
        e.preventDefault();
        const userObj = {
            name: userInput.name,
            age: userInput.age,
            id: ~~(Math.random() * 1000000).toString()
        }
        props.formSubmitMethod(userObj);
    }

    const nameChangeHandler = (e) => {
        setUserInput((prev) => {
            return {...prev, name: e.target.value};
        });
    }

    const ageChangeHandler = (e) => {
        setUserInput(prev => {
            return {...prev, age: e.target.value};
        });
    }


    return (
        <>
            <div className="row">
                <form className="col s12" onSubmit={addUserHandler}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate" onChange={nameChangeHandler}/>
                                <label htmlFor="first_name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="age" type="text" className="validate" onChange={ageChangeHandler}/>
                                <label htmlFor="age">Age</label>
                        </div>
                    </div>
                    <button className="btn">Add User</button>
                </form>
            </div>
        </>
    )

}

export default NewUserForm;