
import { Button, Card } from "@blueprintjs/core";
import saveData,{} from "../../hooks/saveData";
import Auth from "../auth/auth"
export default function List(props) {
    console.log("show  ",props.show);
    let item=[];
    if(props.show)
  {
item=[...props.spacificItem];
  }
  else{
    // 1 2 3 4 5 6 7   2   1 1 2   2  34   3 5 6
item=props.spacificItem.filter((element)=>element.complete==false)
  }
  return (
    <>
      {item.map((item) => (
        <Card key={item.id} interactive={true} class="bp4-elevation-4">
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <Auth action="update">
          <div onClick={() =>props.toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
          </Auth>
          <Auth action="delete">
          <button onClick={props.deleteItem}>Delete</button>
          </Auth>
        </Card>
      ))}
    </>
  );
}
