import React from "react";
import classNames from "classnames";
import App from "./App";

export const RegisterLogin = (props) => {
  const [Logged, setLogged] = React.useState(false);
  const [LoginScreen, setLoginScreen] = React.useState(false);
  const [RegisterScreen, setRegisterScreen] = React.useState(false);
  const [SuccessScreen, setSuccessScreen] = React.useState(false);
  const [ErrorName, setErrorName] = React.useState(false);
  const [ErrorPassword, setErrorPassword] = React.useState(false);

  function logOut() {
    localStorage.setItem("loggedIn", false);
    setLogged(false);
    props.setLogedIn(false);
  }

  async function RegistrationSuccess() {
    setSuccessScreen(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(setSuccessScreen(false));
      }, 300000);
    });
  }

  function updateUser() {
    const inputName = document.getElementById("name").value;
    const inputPassword = document.getElementById("password").value;
    localStorage.setItem("name", inputName);
    localStorage.setItem("password", inputPassword);
    RegistrationSuccess();
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
      props.setLogedIn(true);
    }
  };
  const RegisterRender = () => {
    if (RegisterScreen) {
      return (
        <div className="modal-bg">
          <div className="modal">
            <p
              className="modal-close clickable"
              onClick={() => setRegisterScreen(false)}
            >
              Close
            </p>
            <h2 class="title">SIGN UP</h2>
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
                  className="submit clickable"
                  type="button"
                  value="Submit"
                  onClick={() => updateUser()}
                />
              </p>
            </div>
          </div>
        </div>
      );
    }
  };
  const LoginRender = () => {
    if (LoginScreen) {
      return (
        <div className="modal-bg">
          <div className="modal">
            <p
              className={"modal-close clickable"}
              onClick={() => setLoginScreen(false)}
            >
              Close
            </p>
            <h2 class="title">Login</h2>
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
                  className="submit clickable"
                  type="button"
                  value="Submit"
                  onClick={() => checkUser()}
                />
              </p>
            </form>
          </div>
        </div>
      );
    }
  };
  const LoginMenu = () => {
    if (!Logged) {
      return (
        <div class="nav-log">
          <div className="RegisterLogin">
            <p>
              <span className="clickable" onClick={() => setLoginScreen(true)}>
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
          </div>
        </div>
      );
    }
  };
  const LogOutRender = () => {
    if (Logged) {
      return (
        <div className="modal-bg">
          <div className="RegisterLogin">
            <p>{localStorage.getItem("name")}</p>
            <p className="clickable" onClick={() => logOut()}>
              LOG OUT
            </p>
          </div>{" "}
        </div>
      );
    }
  };
  const RegisterDone = () => {
    return (
      <div className={classNames("modal", { hide: !SuccessScreen })}>
        <h2 class="title">Registration Successful</h2>
        <div id="register">
          <p>Good Job {localStorage.getItem("name")}</p>
          <p>Now you can log in to see the Starships.</p>
        </div>
      </div>
    );
  };
  return <>
  <RegisterRender/>
  <LoginRender/>
  <LoginMenu/>
  <LogOutRender/>
  <RegisterDone/>
  </>
};
