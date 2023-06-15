import React from "react";
import { connect } from "react-redux";
import { addTodoAction } from "../../actions";

const AddTodo = (props) => {
  const outlineStyle = (e) => {
    e.target.style.outline = "none";
  };
  const outlineStyleRemove = (e) => {
    e.target.removeAttribute("style");
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (event.target.userInput.value === undefined) {
          alert("Please Add Items");
        } else {
          let input = event.target.userInput.value;
          props.dispatch(addTodoAction(input));
        }
        event.target.userInput.value = "";
      }}
    >
      <input
        type="text"
        name="userInput"
        onFocus={outlineStyle}
        onBlur={outlineStyleRemove}
      />
      &nbsp;
      <button className="submit-btn">Submit</button>
    </form>
  );
};

export default connect()(AddTodo);
