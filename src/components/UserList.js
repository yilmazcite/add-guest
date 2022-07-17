import React from "react";
import "./UserList.css";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";

const UserList = (props) => {
  //when clicked on a button, takes the corresponding id of the user.
  //then sends it via onDelete prop to App.js:
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="main-container">
      <ul>
        {props.name} (Age: {props.age})
      </ul>
      <PersonRemoveAlt1Icon className="button" onClick={deleteHandler} />
    </div>
  );
};

export default UserList;
