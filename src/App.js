import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import Header from "./components/Header";

function App() {
  const [newUsers, setNewUsers] = useState([
    {
      name: "",
      age: "",
      id: "",
    },
  ]);

  const addNewUser = (user) => {
    let newUserInfo;

    //if one of the input fields is empty, don't add the input to the list:
    if (user.name !== "" && user.age !== "") {
      newUserInfo = {
        ...user,
        id: uuidv4(),
      };

      setNewUsers((prevUsers) => {
        return [newUserInfo, ...prevUsers];
      });
    }
  };

  //receive the corresponding 'id' prop from the UserList.js as the button is clicked.
  //filter the actual main user list and update 'newUsers':
  const deleteUser = (idOfDelete) => {
    const filteredUsers = newUsers.filter((user) => user.id !== idOfDelete);
    setNewUsers(filteredUsers);
  };

  return (
    <div>
      <Header />
      <AddUser onAddNewUser={addNewUser} />
      {newUsers
        .filter((user) => {
          return user.name !== "";
        })
        .map((user) => {
          return (
            <UserList
              key={user.id}
              name={user.name}
              age={user.age}
              id={user.id}
              onDelete={deleteUser}
            />
          );
        })}
    </div>
  );
}

export default App;
