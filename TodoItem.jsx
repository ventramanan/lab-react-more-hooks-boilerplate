import React from "react";

function TodoItem(props){

    let {ele, index, dispatch} = props;
    let {data, isHidden} = ele;

    return (
        <>
        <div id="container">
            <h3>{isHidden ? "The Content is Hidden" : data}</h3>
            <button id="toggleButton"
                onClick={()=>{
                    dispatch({ type : "CHANGE_HIDDEN_VALUE", payload : index})
                }}
            >Toggle</button>
        </div>
        </>
    )
}

export default TodoItem;

