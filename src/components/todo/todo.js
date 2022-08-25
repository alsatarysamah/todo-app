import React, { useEffect, useState, useContext } from "react";
import useForm from "../../hooks/form.js";
import { settingContext } from "../../context/setting.js";
import { v4 as uuid } from "uuid";
import List from "../list/list.js";
import { Button, Card } from "@blueprintjs/core";
import "./todo.css";
import UserForm from "../userForm/userForm";
// import saveData,{getData} from "../../hooks/saveData.js";

const ToDo = () => {
  const settings = useContext(settingContext);
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const items = [];

  const [spacificItem, setSpacificItem] = useState([]);
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  /////add/////////////
  function addItem(item) {
    item.id = getRndInteger(0, 100);
    item.complete = false;
    console.log(item);
    setList([...list, item]);
    if (count == 0 && spacificItem.length <= settings.count - 1) {
      setSpacificItem([...spacificItem, item]);
    }
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    const items2 = spacificItem.filter((item) => item.id !== id);
    setList(items);
    setSpacificItem(items2);
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
  //////////use efect []
  // useEffect(() => {}, [spacificItem]);
  ///////////////use effect count////////////////
  useEffect(() => {
    // console.log({ count });
    // console.log({ spacificItem });
    listLoop(count);
  }, [count]);
  ////////////listLoop//////////////////////////
  function listLoop(i) {
    if (i >= 0 && i < Math.ceil(list.length / settings.count))
      for (
        let x = count * settings.count;
        x <= count * settings.count + (settings.count - 1);
        x++
      ) {
        if (list[x]) items.push(list[x]);
      }
    setSpacificItem(items);
  }
  //////////////////////////
  function increaseCount() {
    let newCounter = count + 1;
    // setSpacificItem([]);
    for (let i = 0; i < items.length; i++) items.pop();
    if (newCounter < Math.ceil(list.length / settings.count))
      setCount(newCounter);
  }

  function decreaseCount() {
    let newCounter = count - 1;
    // setSpacificItem([]);
    for (let i = 0; i < items.length; i++) items.pop();
    if (newCounter >= 0) setCount(newCounter);
  }

  return (
    <>
      <header className="title">
        <h1>To Do List: {incomplete} items pending</h1>
      </header>

      {/* <button onClick={()=>{
  console.log( settings.showCompleted)
  settings.toggleShow()}}>Show Completed Item</button>
<p>show is  {settings.showCompleted.toString()}</p> */}
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
      <List
        toggleComplete={toggleComplete}
        spacificItem={spacificItem}
        show={settings.showCompleted}
      ></List>

      <div id="next">
        <Button class=".bp4-minimal" onClick={decreaseCount}>
          prev
        </Button>

        <Button class=".bp4-minimal" onClick={increaseCount}>
          next
        </Button>
        {/* <UserForm></UserForm> */}
      </div>
    </>
  );
};

export default ToDo;
