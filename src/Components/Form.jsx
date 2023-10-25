import React from "react";
import {useState} from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [error, SetError] = useState("");
const [successMessage, SetSuccessMessage] = useState("");

const handleSubmit = (e) =>{
  e.preventDefault();

  if(name.length <= 5 || !email.includes("@")){
    SetError("Por favor verifique su informacion nuevamente");
  } else{
    SetSuccessMessage(`Gracias ${name}, te contactaremos cuanto antes via email`);
    setName("");
    setEmail("");
    SetError("")
  }
}

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> 
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Enviar</button>
        {error && <p>{error}</p>}
        {successMessage && <p>{successMessage}</p>}
      </form>

    </div>
  );
};

export default Form;
