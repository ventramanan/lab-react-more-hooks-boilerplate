import React, { useReducer, useRef, useState } from "react";
import TodoItem from "./TodoItem";

const initialState = [
    {
        data : null,
        isHidden : false
    }
]

function todoReducer(state, action){
    switch(action.type){
        case "ADD_ITEM":
            return [...state,{
                data : action.payload, 
                isHidden : false
            }]

        case "CHANGE_HIDDEN_VALUE": 
            return state.map((ele, i)=>{
                return i == action.payload ? {...ele, isHidden:!ele.isHidden} : ele
            })
    }
    return state

}

function TodoApp() {

    const [todoData, dispatch] = useReducer(todoReducer, initialState)

    const returedData = useRef(null)

    return (
        <>
            <input id="inputBox" type="text"
                placeholder="Type here"
                ref={returedData}
                onKeyDown={(e)=>{
                    if(e.key == "Enter"){
                        dispatch({ type: "ADD_ITEM", payload: e.target.value })
                    }
                }}
            />
            <div>
                {
                    todoData.map((e, i)=>(
                        <TodoItem ele={e} index={i} key={i} dispatch={dispatch} />
                    ))
                }
            </div>
            <button id="goBack"
            onClick={()=>{
                returedData.current.focus()
            }}
            >Get back writing</button>

        </>
    )
}

export default TodoApp;

