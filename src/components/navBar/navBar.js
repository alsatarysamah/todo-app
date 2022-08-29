import { Link } from 'react-router-dom';
import { LoginContext } from "../../context/login"
import {When} from 'react-if';
import { useContext } from 'react';


export default function NavBarToDo(){
const login=useContext(LoginContext);
    return(
        <>
         <nav class="bp4-navbar .modifier">
  <div class="bp4-navbar-group bp4-align-left">
    <div class="bp4-navbar-heading" className="link">TO DO</div>
  </div>
  <div class="bp4-navbar-group bp4-align-right">
  <Link to={`/todo-app`} className="link" >Home</Link >
  {/* <a href='/todo-app'>home</a> */}
    <Link to={`/userForm`}  className="link">Form</Link>
    {/* <a href='/userForm'>form</a> */}
    <span class="bp4-navbar-divider"></span>
    <When condition={login.loggedIn}>
    <button class="bp4-button bp4-minimal " className="link" onClick={login.logout}>Log out</button>
    </When>
    <button class="bp4-button bp4-minimal bp4-icon-notifications"></button>
    <button class="bp4-button bp4-minimal bp4-icon-cog"></button>
  </div>
</nav>
        </>
    )
}