import React from 'react';
// import { Routes, Route,Navigate } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route,Routes, Link,HashRouter } from 'react-router-dom';
import ToDo from './components/todo/todo.js';
import Settings from './context/setting';
import UserForm from './components/userForm/userForm.js';
import NavBarToDo from './components/navBar/navBar.js';
import Footer from './components/footer/footer.js';
export default class App extends React.Component {
  
  render() {
    return (
      <>
        <NavBarToDo></NavBarToDo>
      <Settings>
{/* <Router> 
  <Switch>
<Route  path='/' ><ToDo/></Route>
<Route  path='/userForm' >{<UserForm/>}</Route>
  </Switch>
</Router> */}
      <Routes>
        <Route exact path="/" element={<ToDo />} />
        <Route exact   path="/userForm" element={<UserForm />} />
      </Routes>
      {/* <ToDo></ToDo> */}
      <Footer></Footer>
      </Settings>
      </>
      
    );
  }
}