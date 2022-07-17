import React, { useState } from "react";
import "./AddUser.css";
import Error from "./Error";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const AddUser = (props) => {
  const [newUserName, setNewUserName] = useState("");
  const [newUserAge, setNewUserAge] = useState("");
  const [error, setError] = useState(); //initial state value is 'undefined'

  const nameChangeHandler = (event) => {
    setNewUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setNewUserAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //check if the name or age input is empty and update the 'error' state accordingly.
    //firstly check the if conditions and RETURN them if true.
    //so that the rest of the code where the new guest info is stored will not be executed.
    if (newUserName.trim().length === 0 || newUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Name or age cannot be empty.",
      });
      return;
    }
    if (newUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Age cannot be smaller than 1.",
      });
      return;
    }

    const newUserInfo = {
      name: newUserName,
      age: newUserAge,
      isSelected: false,
    };

    props.onAddNewUser(newUserInfo);

    setNewUserName("");
    setNewUserAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Error
          errorTitle={error.title}
          errorMsg={error.message}
          toggleErrorPopup={errorHandler}
        />
      )}
      <form className="form-main" onSubmit={submitHandler}>
        <div className="form-input">
          <label>Guest name</label>
          <input
            value={newUserName}
            onChange={nameChangeHandler}
            type="text"
            placeholder="Enter name"
          />
        </div>
        <div className="form-input">
          <label>Guest age</label>
          <input
            value={newUserAge}
            onChange={ageChangeHandler}
            type="number"
            placeholder="Enter age"
          />
        </div>
        <button>
          <PersonAddAlt1Icon />
        </button>
      </form>
    </div>
  );
};

export default AddUser;
