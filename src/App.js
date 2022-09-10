import React from "react";
// import { Routes, Route,Navigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  HashRouter,
} from "react-router-dom";
import ToDo from "./components/todo/todo.js";
import Settings from "./context/setting";
import UserForm from "./components/userForm/userForm.js";
import NavBarToDo from "./components/navBar/navBar.js";
import Footer from "./components/footer/footer.js";
import Login, { LoginContext } from "./context/login.js";
import LoginForm from "./components/loginForm/loginForm";
import { When } from "react-if";
export default class App extends React.Component {
  static contextType = LoginContext;
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Login>
          <NavBarToDo></NavBarToDo>
          {/* <LoginForm></LoginForm> */}
          <Settings>
            <Routes>
              <Route path="/todo-app"  element={<ToDo />} />
              <Route path="/userForm"  element={<UserForm />} />
            </Routes>
          </Settings>
          <Footer></Footer>
        </Login>
      </>
    );
  }
}
