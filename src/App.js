import { useState } from "react";

import './App.css';
import NewUserForm from "./NewUserForm/NewUserForm";
import UserList from "./UserList/UserList";
import Modal from "./UI/Modal";

function App() {

  const [users, setUsers] = useState(
      [{
        name: "Matt",
        age: 25,
        id: 11223344556
      }, {
        name: "Mandy",
        age: 25,
        id: 11223344557
      }]
  )

    const [showModal, setShowModal] = useState(false);
    const [modalMsg, setModalMsg] = useState("");


    const updateUsers = (newUserInfo) => {
        if(!newUserInfo.name || !newUserInfo.age) {
            setModalMsg("Name and/or age can not be blank");
            setShowModal(true);
        } else if (parseFloat(newUserInfo.age) <= 0) {
            setModalMsg("Age must be greater than 0");
            setShowModal(true);
        }
        else {
            setShowModal(false);
            setModalMsg("");
            setUsers((prevUsers) => {
                const userList = [...prevUsers];
                userList.unshift(newUserInfo);
                return userList;
            })
        }
    }


  return (

      <div className="App container">
          {showModal && <Modal message={modalMsg}/>}
          <NewUserForm formSubmitMethod={updateUsers}/>
          <UserList userList={users}/>
      </div>
  );
}

export default App;
