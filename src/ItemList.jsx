import React from "react";
import Item from "./Item";
import styled from "styled-components";

const ItemList = (props) => {
    return (
        <StyledItemList>
            <ul>
                {props.todos.map((todo)=>{
                    return <Item 
                        todo={todo}  
                        id={todo.id} 
                        key={todo.id}
                        isDone={props.isDone}
                        setIsDone={props.setIsDone}
                        deleteTodo={() => props.deleteTodo(todo.id, props.isDone)}
                        />;
                })}
            </ul>
        </StyledItemList>
    );
};

export default ItemList;

const StyledItemList = styled.div`
    ul {
        list-style: none;
    }
`;