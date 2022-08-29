import React, { useContext, useState } from "react";
import "./loginForm.css";
import { LoginContext } from "../../context/login";
import { When } from "react-if";

export default function LoginForm(props) {
  const loginContext = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  /////////submit/////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginContext);
    // console.log("name  ",e.uname.value)
    loginContext.login(username, password);
  };
  const usernameHandler = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  return (
    <>
      <When condition={!loginContext.loggedIn}>
        <div className="f">
          <form>
            <div className="input-container">
              <label>Username </label>
              <input
                type="text"
                name="uname"
                required
                onChange={usernameHandler}
              />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                name="pass"
                required
                onChange={passwordHandler}
              />
              {/* {renderErrorMessage("pass")} */}
            </div>
            <div className="button-container">
              <input type="submit" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </When>
      {/* <When condition={loginContext.loggedIn}>
                    <div>
                        {loginContext.user.username}
                    </div>
                    <button onClick={loginContext.logout}>Logout</button>
                </When> */}
    </>
  );
}
