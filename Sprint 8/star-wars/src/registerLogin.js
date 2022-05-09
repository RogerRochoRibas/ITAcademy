import React from "react";
import classNames from "classnames";
import App from "./App";

export const RegisterLogin = ({ Login, UpdateLogin }) => {
  const [errorName, setErrorName] = React.useState(null);
  const [errorPassword, setErrorPassword] = React.useState(null);

  function logOut() {
    localStorage.setItem("loggedIn", false);
    console.log("logout");
  }

  function fromLoginToRegister() {
    UpdateLogin("loginVisible", false);
    UpdateLogin("registerVisible", true);
  }

  async function fromRegisterToLogin() {
    UpdateLogin("registerVisible", false);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(UpdateLogin("loginVisible", true));
      }, 500);
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
      /*UpdateLogin("loggedIn", true);*/
      UpdateLogin("loginVisible", false);
      /*UpdateLogin('registerVisible', false);*/
    }
  };

  if (Login["registerVisible"]) {
    return (
      <div className="modal-bg">
        <div className="modal">
          <p
            className="modal-close"
            onClick={() => UpdateLogin("registerVisible", false)}
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
                className="submit"
                type="button"
                value="Submit"
                onClick={() => updateUser()}
              />
            </p>
          </div>
          <p>
            Already have an account?{" "}
            <span className="link" onClick={() => fromRegisterToLogin()}>
              Log In
            </span>
            .
          </p>
        </div>
      </div>
    );
  }

  if (Login["loginVisible"]) {
    return (
      <div className="modal-bg">
        <div className="modal">
          <p
            className={"modal-close"}
            onClick={() => UpdateLogin("loginVisible", false)}
          >
            Close
          </p>
          <h2 class="title">Login</h2>
          <p>You must Log In to see the spaceships.</p>
          <form id="login" onSubmit={checkUser}>
            <p>
              <label>
                <input
                  className={classNames({ error: errorName })}
                  type="text"
                  name="inputName"
                  id="inputName"
                  placeholder="User Name"
                />
              </label>
            </p>
            <p className={classNames("hide", { errorText: errorName })}>
              Name not found.
            </p>
            <p>
              <label>
                <input
                  className={classNames({ error: errorPassword })}
                  type="text"
                  name="inputPassword"
                  id="inputPassword"
                  placeholder="Password"
                />
              </label>
            </p>
            <p className={classNames("hide", { errorText: errorPassword })}>
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
              <span className="link" onClick={() => fromLoginToRegister()}>
                SIGN UP
              </span>{" "}
              for free.
            </p>
          </form>
        </div>
      </div>
    );
  }
  if (!localStorage.getItem("loggedIn")) {
    return (
      <>
        <div className="RegisterLogin">
          <p>
            <span
              className="clickable"
              onClick={() => UpdateLogin("loginVisible", true)}
            >
              LOG IN
            </span>
            <span id="separator"> / / </span>
            <span
              className="clickable"
              onClick={() => UpdateLogin("registerVisible", true)}
            >
              SIGN UP
            </span>
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="RegisterLogin">
          <p>{localStorage.getItem("name")}</p>
          <p className="clickable" onClick={() => logOut()}>
            LOG OUT
          </p>
        </div>
      </>
    );
  }
};
