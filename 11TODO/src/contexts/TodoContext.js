import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id: 1,
        TODO:"task to do",
        completed: false
    }],
    addTodo:(TODO) => {},
    updateTodo: (id,TODO) => {},
    delTodo: (id) => {},
    toggleSwitch:(id) => {}

})
 
export const useTODO = () => {
    return (
        useContext (TodoContext)
    );
    
}

export const ContextProvider = TodoContext.Provider