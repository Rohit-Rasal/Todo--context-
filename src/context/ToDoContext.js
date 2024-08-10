import { createContext , useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            complete:false,
        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(todo,id)=>{},
    toggleComplete:(id)=>{}
});



export const useTodo=()=>{
    return(
        useContext(TodoContext)
    )
}
export const Todoprovider=TodoContext.Provider



// 15.26