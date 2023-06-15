import React, { useState } from "react";
const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);
  const data = [];
  const [signupData, setSignupData] = useState(data);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    setSignupData({ ...signupData, [event.target.name]: event.target.value });
    localStorage.setItem("data", JSON.stringify(signupData));
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
        localStorage.getItem("data");
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button className="add-btn">Add new user</button>
    </form>
  );
};
export default AddUserForm;
