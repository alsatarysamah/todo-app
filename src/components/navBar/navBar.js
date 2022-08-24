import { Link } from 'react-router-dom';
export default function NavBarToDo(){
    return(
        <>
         <nav class="bp4-navbar .modifier">
  <div class="bp4-navbar-group bp4-align-left">
    <div class="bp4-navbar-heading" className="link">TO DO</div>
  </div>
  <div class="bp4-navbar-group bp4-align-right">
  <Link to={`/`} className="link" >Home</Link >
    <Link to={`/userForm`}  className="link">Form</Link>
    <span class="bp4-navbar-divider"></span>
    <button class="bp4-button bp4-minimal bp4-icon-user"></button>
    <button class="bp4-button bp4-minimal bp4-icon-notifications"></button>
    <button class="bp4-button bp4-minimal bp4-icon-cog"></button>
  </div>
</nav>
        </>
    )
}