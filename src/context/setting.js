import React,{useContext} from "react";
export const settingContext=React.createContext();
export default function Setting(props){
// const setting=useContext(settingContext);
const state={
    count:4,
    sortField:"string",
    showCompleted:true,
    toggleShow:()=>{ state.showCompleted=!state.showCompleted;  }

}
// const toggleShow =()=>{
//    state.showCompleted=!state.showCompleted;  
// }
return(
    <>
    <settingContext.Provider value={state}>
    {props.children}
    </settingContext.Provider>
    </>
)
}