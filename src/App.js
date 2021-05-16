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
        const {age, name} = newUserInfo;
        if(!name || !age) {
            setModalMsg("Name and/or age can not be blank");
            setShowModal(true);
        } else if (parseFloat(age) <= 0) {
            setModalMsg("Age must be greater than 0");
            setShowModal(true);
        } else if (isNaN(age)) {
            setModalMsg("Age must be a number");
            setShowModal(true);
        } else if (name.trim().length < 1 || age.trim().length < 1) {
            setModalMsg("Name and/or age must not be blank");
            setShowModal(true);
        } else{
            setShowModal(false);
            setModalMsg("");
            setUsers((prevUsers) => {
                const userList = [...prevUsers];
                userList.unshift(newUserInfo);
                return userList;
            })
        }
    }

    const dismissModal = (status) => {
        setShowModal(status);
    }

    const updateUserListFromDelete = (newList) => {
        setUsers(newList);
    }

  return (

      <div className="App container">
          {showModal && <Modal dismiss={dismissModal} message={modalMsg}/>}
          <NewUserForm formSubmitMethod={updateUsers}/>
          <UserList updateUserList={updateUserListFromDelete} userList={users}/>
      </div>
  );
}

export default App;
