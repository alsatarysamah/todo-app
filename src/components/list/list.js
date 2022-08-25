
import { Button, Card } from "@blueprintjs/core";
import saveData,{} from "../../hooks/saveData";
export default function List(props) {
    console.log("show  ",props.show);
    let item=[];
    // const spacificItem=get
    if(props.show)
  {
item=[...props.spacificItem];
  }
  else{
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
          <div onClick={() =>props.toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
        </Card>
      ))}
    </>
  );
}
