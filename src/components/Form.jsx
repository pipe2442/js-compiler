import React, { useState } from "react";
import { compilerFunction } from "../compiler";

const Form = () => {
  const [error, setError] = useState(false);

  const [data, setData] = useState({
    email: "",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (event) => {
    event.preventDefault();
    setError(false);

    console.log("testing the function", compilerFunction(data.email));

    compilerFunction(data.email) ? setError(true) : setError(false);
  };

  return (
    <>
      <form className="row" onSubmit={submitData}>
        <div>
          <input
            type="text"
            placeholder="email"
            onChange={handleInputChange}
            name="email"
          ></input>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {!error && <div>El email es valido</div>}
      {error && <div>El email es invalido</div>}
    </>
  );
};

export default Form;
