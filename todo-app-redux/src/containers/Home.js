import AddTodo from "../component/add-todo/AddTodo";
import List from "../component/list/List";
import Iphone from "../images/iphone.jpeg";

function Home(props) {
  const btnStyle = { display: "flex", justifyContent: "center" };
  return (
    <>
      <section className="container">
        <br />
        <div className="form">
          <AddTodo />
          <List />
        </div>

        <div className="buynow">
          <img src={Iphone} alt="iphone" />
          <h1>
            {" "}
            I Phone <strong> {props.data.count}</strong>
          </h1>
          <div style={btnStyle}>
            <button onClick={() => props.addToCartHandler()}>Add +</button>
            &nbsp;&nbsp;
            <button onClick={() => props.RemoveToCartHandler()}>
              - Delete
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
