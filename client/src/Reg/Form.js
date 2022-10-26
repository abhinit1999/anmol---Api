import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  let name, value;
  const onChangeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });
  };
  const sendData = (e) => {
    const [name, password] = data;
    e.preventDefault();
    fetch("http://localhost:4200/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });
    window.alert("Data inserted !!!")
  };
  return (
    <>
      <form
        
        style={{
          display: "grid",
          justifyContent: "center",
          marginTop: "20rem",
        }}
      >
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={data.name}
            onChange={onChangeHandler}
          />
        </label>
        <br />
        <label htmlFor="password">
          Paasword:
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={onChangeHandler}
          />
        </label>
        <br />
        <button type="submit" onClick={sendData}> Submit</button>
      </form>

      {
        
      }
    </>
  );
};

export default Form;
