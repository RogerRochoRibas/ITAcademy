import React from "react";
import classNames from "classnames";
import App from "./App";

export const RegisterLogin = (props) => {
  const [Logged, setLogged] = React.useState(false)
  const [LoginScreen, setLoginScreen] = React.useState(false)
  const [RegisterScreen, setRegisterScreen] = React.useState(false)
  const [ErrorName, setErrorName] = React.useState(false)
  const [ErrorPassword, setErrorPassword] = React.useState(false)
  
  function logOut() {
    localStorage.setItem("loggedIn", false);
    setLogged(false);
  }

  function changeRegisterLogin(register,login) {
    setRegisterScreen(register);
    setLoginScreen(login);
  }

  async function RegistrationSuccess() {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('alert("Registration completed");');
      }, 5000);
    });
  }

  function updateUser() {
    const inputName = document.getElementById("name").value;
    const inputPassword = document.getElementById("password").value;
    localStorage.setItem("name", inputName);
    localStorage.setItem("password", inputPassword);
    alert("Registration completed");
  }

  const checkUser = () => {
    let savedName = localStorage.getItem("name");
    let savedPassword = localStorage.getItem("password");
    let inputName = document.getElementById("inputName").value;
    let inputPassword = document.getElementById("inputPassword").value;
    let correctName = savedName === inputName;
    let correctPassword = savedPassword === inputPassword;
    if (!correctName) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
    if (!correctPassword) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
    if (correctName && correctPassword) {
      localStorage.setItem("loggedIn", true);
      setLogged(true);
      setLoginScreen(false);
      setRegisterScreen(false);
    }
  };

  if (RegisterScreen) {
    return (
      <div className="modal-bg">
        <div className="modal">
          <p
            className="modal-close"
            onClick={() => setRegisterScreen(false)}
          >
            Close
          </p>
          <h2 class="title">SIGN UP</h2>
          <button onClick={() =>console.log('login: ', Logged,'LoginScreen: ',LoginScreen,'RegisterScreen: ',RegisterScreen)}>LogData</button>
        <div id="register">
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
              <input
                className="submit"
                type="button"
                value="Submit"
                onClick={() => updateUser()}
              />
            </p>
          </div>
          <p>
            Already have an account?{" "}
            <span className="link" onClick={() => changeRegisterLogin(true,false)}>
              Log In
            </span>
            .
          </p>
        </div>
      </div>
    );
  }

  if (LoginScreen) {
    return (
      <div className="modal-bg">
        <div className="modal">
          <p
            className={"modal-close"}
            onClick={() => setLoginScreen(false)}
          >
            Close
          </p>
          <h2 class="title">Login</h2>
          <button onClick={()=>console.log('login: ', Logged,'LoginScreen: ',LoginScreen,'RegisterScreen: ',RegisterScreen,'Logged: ',Logged)}>LogData</button>
        <p>You must Log In to see the spaceships.</p>
          <form id="login" onSubmit={checkUser}>
            <p>
              <label>
                <input
                  className={classNames({ error: ErrorName })}
                  type="text"
                  name="inputName"
                  id="inputName"
                  placeholder="User Name"
                />
              </label>
            </p>
            <p className={classNames("hide", { errorText: ErrorName })}>
              Name not found.
            </p>
            <p>
              <label>
                <input
                  className={classNames({ error: ErrorPassword })}
                  type="text"
                  name="inputPassword"
                  id="inputPassword"
                  placeholder="Password"
                />
              </label>
            </p>
            <p className={classNames("hide", { errorText: ErrorPassword })}>
              Wrong password.
            </p>
            <p>
              <input
                className="submit"
                type="button"
                value="Submit"
                onClick={() => checkUser()}
              />
            </p>
            <p>
              Don't have an account?{" "}
              <span className="link" onClick={() => changeRegisterLogin(false,true)}>
                SIGN UP
              </span>{" "}
              for free.
            </p>
          </form>
        </div>
      </div>
    );
  }
  if (!Logged) {
    return (
      <>
        <div className="RegisterLogin">
          <p>
            <span
              className="clickable"
              onClick={() => setLoginScreen(true)}
            >
              LOG IN
            </span>
            <span id="separator"> / / </span>
            <span
              className="clickable"
              onClick={() => setRegisterScreen(true)}
            >
              SIGN UP
            </span>
          </p>
          <button onClick={()=>console.log('login: ', Logged,'LoginScreen: ',LoginScreen,'RegisterScreen: ',RegisterScreen,'Logged: ',Logged)}>LogData</button>
       </div>
      </>
    );
  } if (Logged) {
    return (
      <>
        <div className="RegisterLogin">
          <p>{localStorage.getItem("name")}</p>
          <p className="clickable" onClick={() => logOut()}>
            LOG OUT
          </p>
        </div>
        <button onClick={()=>console.log('login: ', Logged,'LoginScreen: ',LoginScreen,'RegisterScreen: ',RegisterScreen,'Logged: ',Logged)}>LogData</button>
       </>
    );
  }
};
