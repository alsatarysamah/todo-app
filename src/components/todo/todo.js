import React, { useEffect, useState, useContext } from "react";
import useForm from "../../hooks/form.js";
import { settingContext } from "../../context/setting.js";
import { v4 as uuid } from "uuid";
import List from "../list/list.js";
import { Button, Card } from "@blueprintjs/core";
import "./todo.css";
import UserForm from "../userForm/userForm";
import {When} from 'react-if';
import { LoginContext } from "../../context/login"
import saveData,{getData} from "../../hooks/saveData.js";
import Auth from "../auth/auth"
const ToDo = () => {
  
  const settings = useContext(settingContext);
  const login = useContext(LoginContext);
  console.log({settingContext});
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  // saveData("count",count)
  const [count, setCount] = useState(0);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const items = [];
// let counLS=
  const [spacificItem, setSpacificItem] = useState([]);
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  /////add/////////////
  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
   
    setList([...list, item]);
    saveData("list",list)
    if (count == 0 && spacificItem.length <= settings.count - 1) {
      setSpacificItem([...spacificItem, item]);
    }
  }

  function deleteItem(id) {
    // const items = list.filter((item) => item.id !== id);
    // const items2 = spacificItem.filter((item) => item.id !== id);
    // setList(items);
    const items = list.filter( item => item.id !== id );
    setList(items);
    console.log({list});
    // setSpacificItem(items2);
  }

  function toggleComplete(id) {
    console.log("function ", settings.showCompleted);

    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    // console.log(settings.count);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  ///////////////use effect count////////////////
  useEffect(() => {
  console.log({count});
  saveData("count",count)
    listLoop(count);
  }, [count]);
  ////////////listLoop//////////////////////////
  function listLoop(i) {
    // let arr=getData("list");
    // if(arr)
    if (i >= 0 && i < Math.ceil(list.length / settings.count))
      for (
        let x = count * settings.count;
        x <= count * settings.count + (settings.count - 1);
        x++
      ) {
        if (list[x])
         items.push(list[x]);
      }
    setSpacificItem(items);
  }
  //////////////////////////
  function increaseCount() {
    console.log("increase");
    let newCounter = count + 1;
    for (let i = 0; i < items.length; i++) items.pop();
    if (newCounter < Math.ceil(list.length / settings.count))
      setCount(newCounter);
  }

  function decreaseCount() {
    let newCounter = count - 1;

    for (let i = 0; i < items.length; i++) items.pop();
    if (newCounter >= 0) 
    setCount(newCounter);
  }
  // if (match === null) return <></>;
  return (
    <>
    <When condition={login.loggedIn}>
      <Auth action="read">
      <header className="title">
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      </Auth>
      <Auth action="create">
      <form onSubmit={handleSubmit} className="f">
        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input
            class="bp4-input"
            onChange={handleChange}
            name="text"
            type="text"
            placeholder="Item Details"
          />
        </label>

        <label>
          <span>Assigned To</span>
          <input
            class="bp4-input"
            onChange={handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
          />
        </label>

        <label>
          <span>Difficulty</span>
          <input
            onChange={handleChange}
            defaultValue={defaultValues.difficulty}
            type="range"
            min={1}
            max={5}
            name="difficulty"
          />
        </label>

        <label>
          {/* <button type="submit">Add Item</button> */}
          <Button class=".bp4-minimal" type="submit">
            Add Item
          </Button>
        </label>
      </form>
      </Auth>
      <Auth action="read">
      <List
        toggleComplete={toggleComplete}
        spacificItem={spacificItem}
        show={settings.showCompleted}
        deleteItem={deleteItem}
      ></List>
</Auth>
      <div id="next">
        <Button class=".bp4-minimal" onClick={decreaseCount}>
          prev
        </Button>

        <Button class=".bp4-minimal" onClick={increaseCount}>
          next
        </Button>
        {/* <UserForm></UserForm> */}
      </div>
     
      </When>
    </>
  );
};

export default ToDo;
