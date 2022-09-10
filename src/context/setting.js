import React,{useContext,useState,useEffect} from "react";
import saveData,{getData} from "../hooks/saveData";



export const settingContext=React.createContext();

export default function Setting(props){
// const setting=useContext(settingContext);

const [count,setCount]=useState(2);
const[showCompleted,setShowCompleted]=useState(true)
const state={
    count:count,
    sortField:"string",
    showCompleted:showCompleted,
    setCount:setCount,
    setShowCompleted:setShowCompleted,
    saveData:saveData

}
useEffect(()=>{
    
const arr= getData("input");
console.log({arr});
if(arr)
{
    setCount(arr.count);
    setShowCompleted(arr.show);


}
},[showCompleted,count])
return(
    <>
    <settingContext.Provider value={state}>
    {props.children}
    </settingContext.Provider>
    </>
)
}