import React, { useState, useEffect } from "react";

function HomeComponent() {
  const [hasError, setErrors] = useState("");
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      try {
        if (response) {
          const json = await response.json();
          setTimeout(() => setPlanets(json), 2000);
        }
      } catch (err) {
        console.log(err);
        setErrors("Something went wrong");
      }
    }

    fetchData();
  }, []);

  const showPage = () => {
    setTimeout(3000);
  };
  showPage();
  return (
    <div className="content">
      {planets === "" && (
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      )}
      <h1>User List</h1>
      <h2>This Data come From Api</h2>
      <p>{hasError}</p>
      <ul className="pl-0" type="none">
        {planets.map((item, index) => (
          <li key={index}>
            {index + 1} &nbsp;
            <strong>Name :-</strong> {item.name} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <strong>Email :-</strong> {item.email}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HomeComponent;
