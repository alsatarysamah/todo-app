// import 
export default function ItemsCard(item)
{console.log({item});
    return(
        <div key={item.id}>
        <p>{item.text}</p>
        <p>
          <small>Assigned to: {item.assignee}</small>
        </p>
        <p>
          <small>Difficulty: {item.difficulty}</small>
        </p>
        {/* <div onClick={() => toggleComplete(item.id)}>
          Complete: {item.complete.toString()}
        </div> */}
        <hr />
      </div>
    )
}