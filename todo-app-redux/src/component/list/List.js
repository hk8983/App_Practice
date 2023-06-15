import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../actions";

const List = (props) => {
  const DeleteStyle = { marginLeft: "15px" };
  return (
    <ul className="list">
      {props.todos.map((todo, index) => (
        <li key={index}>
          {todo.message}
          <button
            style={DeleteStyle}
            onClick={() => props.dispatch(deleteTodo(todo.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.data,
});

export default connect(mapStateToProps)(List);
