import React from "react";
import classNames from "classnames";

export function RegisterLogin(props) {
  const [registerVisible, setRegisterVisible] = React.useState(null);
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
    if (props.loginVisible) {
      props.setLoginVisible(false);
    } else {
      props.setLoginVisible(true);
    }
  }

function fromLoginToRegister() {
  props.setLoginVisible(false);
  setRegisterVisible(true);
}

function fromRegisterToLogin() {
  setRegisterVisible(false);
  props.setLoginVisible(true);
}

  function updateUser() {
    const inputName = document.getElementById("name").value;
    const inputPassword = document.getElementById("password").value;
    localStorage.setItem("name", inputName);
    localStorage.setItem("password", inputPassword);
    alert("Registration completed");
  }

  const checkUser = (event) => {
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
      props.setLoggedIn(true)
      props.setLoginVisible(false)
      setRegisterVisible(false)
    }
  };

  if (registerVisible) {
    return (
      <div className="modal-bg">
        <div className="modal">
          <a
            href="#"
            title="Close"
            className={classNames("modal-close", { hide: !props.loggedIn })}
            onClick={() => showRegister()}
          >
            Close
          </a>
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
          <p>Already have an account? <span className='link' onClick={()=>fromRegisterToLogin()}>Log In</span>.</p>
         
        </div>
      </div>
    );
  }
  if (props.loginVisible) {
    return (
      <div className="modal-bg">
        <div className="modal">
          <a
            href="#"
            title="Close"
            className={classNames("modal-close", { hide: !props.loggedIn })}
            onClick={() => showLogin()}
          >
            Close
          </a>
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
            <p
              className={classNames("hide", { errorText: errorName })}
            >
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
            <p
              className={classNames("hide", { errorText: errorPassword })}
            >
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
            <p>Don't have an account? <span className='link' onClick={()=>fromLoginToRegister()}>SIGN UP</span> for free.</p>
          </form>
        </div>
      </div>
    );
  }
  if (!props.loginVisible && !registerVisible && !props.loggedIn) {
    return (
      <div className='RegisterLogin'>
        <p>
          <span className="clickable" onClick={() => showLogin()}>LOG IN</span>
          <span id='separator'> / / </span>
          <span className="clickable" onClick={() => showRegister()}>SIGN UP</span>
        </p>
      </div>
    );
  }
}
