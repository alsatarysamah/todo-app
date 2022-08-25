import { settingContext } from "../../context/setting";
import { Switch } from "@blueprintjs/core";
import React, { useContext } from "react";
import saveData,{getData} from "../../hooks/saveData";
export default function UserForm() {
  const settings = useContext(settingContext);
  
  const handle = (e) => {
    e.preventDefault();
    //    console.log("target ",e.target.checked);

    settings.setShowCompleted(e.target.checked);
  };
  const storeData = (e) => {
    e.preventDefault();
    settings.setShowCompleted(e.target.show.checked)
    settings.setCount(e.target.count.value);
    let data = {
      count: e.target.count.value,
      show: e.target.show.checked,
    };
    // console.log({data});
    settings.saveData("input",data);
    e.target.reset();
  };

  return (
    <>
    {/* <h1 className="title">Choose the settings</h1>  className="f"*/}
      <form class="bp4-form-group .modifier"  className="f" onSubmit={storeData}>
        <label>Count</label>
        <input name="count" type="text" placeholder="Items per page" />

        <label>Show Completed item</label>
        <label class="bp4-control bp4-switch .modifier">
          <input name="show" type="checkbox" />
          <span class="bp4-control-indicator"></span>
          Show
        </label>

        <input type="submit" />
      </form>
    </>
  );
}
