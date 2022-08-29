import { settingContext } from "../../context/setting";
import { Switch } from "@blueprintjs/core";
import React, { useContext } from "react";
import saveData,{getData} from "../../hooks/saveData";
import { LoginContext } from "../../context/login";
import {When} from "react-if"
export default function UserForm() {
  const settings = useContext(settingContext);
  const login=useContext(LoginContext)
 
  const storeData = (e) => {
    e.preventDefault();
    settings.setShowCompleted(e.target.show.checked)
    settings.setCount(e.target.page.value);
    let data = {
      count: e.target.page.value,
      show: e.target.show.checked,
    };
    // console.log({data});
    saveData("input",data);
    // e.target.reset();
  };

  return (
    <>
    {/* <h1 className="title">Choose the settings</h1>  className="f"*/}
    <When condition={login.loggedIn}>
      <form class="bp4-form-group .modifier"  className="f" onSubmit={storeData}>
        <label>Count</label>
        <input name="page" type="text" placeholder="Items per page" />

        <label>Show Completed item</label>
        <label class="bp4-control bp4-switch .modifier">
          <input name="show" type="checkbox" />
          <span class="bp4-control-indicator"></span>
          Show
        </label>

        <input type="submit" />
      </form>
      </When>
    </>
  );
}
