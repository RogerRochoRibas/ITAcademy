import React from "react";





export function Register() {
  const [registerVisible, setRegisterVisible] = React.useState(false);

  function showRegister() {
    if (registerVisible){setRegisterVisible(false)}
    else {setRegisterVisible(true)}
  }

  function updateUser() {
    const inputName = document.getElementById("name").value;
    const inputPassword = document.getElementById("password").value;
    localStorage.setItem("name", inputName);
    localStorage.setItem("password", inputPassword);
    alert("Registration completed");
  }
  
  
  if (registerVisible) {
  return (
    <>
      <h2 class='title'>Register</h2>
      <form id="register">
        <p>
          <label>
            <input type="text" name="name" id="name" placeholder="User Name" />
          </label>
        </p>
        <p>
          <label>
            <input type="text" name="password" id="password" placeholder="Password" />
          </label>
        </p>
        <p>
          <input type="submit" value="Submit" onClick={() => updateUser()} />
        </p>
      </form>
    </>
  );}
}
