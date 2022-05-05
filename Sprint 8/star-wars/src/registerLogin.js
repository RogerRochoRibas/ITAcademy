import React from "react";
import classNames from "classnames";

export function RegisterLogin() {
  const [registerVisible, setRegisterVisible] = React.useState(null);
  const [loginVisible, setLoginVisible] = React.useState(null);
  const [errorName, setErrorName] = React.useState(null);
  const [errorPassword, setErrorPassword] = React.useState(null);

  function showRegister() {
    if (registerVisible) {
      setRegisterVisible(false);
    } else {
      setRegisterVisible(true);
    }
  }

  function showLogin() {
    if (loginVisible) {
      setLoginVisible(false);
    } else {
      setLoginVisible(true);
    }
  }
  function updateUser() {
    const inputName = document.getElementById("name").value;
    const inputPassword = document.getElementById("password").value;
    localStorage.setItem("name", inputName);
    localStorage.setItem("password", inputPassword);
    alert("Registration completed");
  }

  const checkUser = (event) => {
    event.preventDefault();
    let savedName = localStorage.getItem("name");
    let savedPassword = localStorage.getItem("password");
    let inputName = document.getElementById("inputName").value;
    let inputPassword = document.getElementById("inputPassword").value;
    let correctName = savedName === inputName
    let correctPassword = savedPassword === inputPassword
    if (correctName) {
      setErrorName(true);
    } else {setErrorName(false)}
    if (correctPassword) {
      setErrorPassword(true);
    } else {setErrorPassword(false)}
  }

  if (registerVisible) {
    return (
      <div className="modal-bg">
        <div className="modal">
          <a href="#" title="Close" className="modal-close" onClick={() => showRegister()}>
            Close
          </a>
          <h2 class="title">Register</h2>
          <form id="register">
            <p>
              <label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="User Name"
                />
              </label>
            </p>
            <p>
              <label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </label>
            </p>
            <p>
              <input className="submit"
                type="submit"
                value="Submit"
                onClick={() => updateUser()}
              />
            </p>
          </form>
        </div>
      </div>
    );
  }
  if (loginVisible) {
    return (
      <div className="modal-bg">
        <div className="modal">
          <a href="#" title="Close" className="modal-close" onClick={() => showLogin()}>
            Close
          </a>
          <h2 class="title">Login</h2>
          <form id="login" onsubmit={checkUser}>
            <p>
              <label >
                <input className={{'error':errorName}}
                  type="text"
                  name="inputName"
                  id="inputName"
                  placeholder="User Name"
                />
              </label>
            </p>
            <p>
              <label>
                <input className={{'error':errorPassword}}
                  type="text"
                  name="inputPassword"
                  id="inputPassword"
                  placeholder="Password"
                />
              </label>
            </p>
            <p>
              <input className="submit"
                type="submit"
                value="Submit"
              />
            </p>
          </form>
        </div>
      </div>
    );
  }
  if (!loginVisible && !registerVisible) {
    return (
      <div>
        <p onClick={()=>showRegister()}>Register</p>
        <p onClick={()=>showLogin()}>Login</p>
      </div>
    );
  }
}
