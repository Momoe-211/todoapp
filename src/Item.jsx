import React, {useState} from "react";
// import styles from "../styles/item.modele.css";
import styled from "styled-components";

const Item = ({props, todo, id, deleteTodo, isDone, setIsDone}) => {
    

    const handleDelete = () => {
        deleteTodo(id, isDone);
    }

    return (
        <StyledItem>
                <li>
                    <input type="checkbox" onChange={() => {
                        setIsDone(!isDone)
                    }} />
                    <span 
                        style={{textDecoration: isDone ? 'line-through' : 'none'}}>
                            <span className={"todo_priority"}>
                                {todo.priority}
                            </span>
                        {todo.content}
                    </span>
                    <button 
                        onClick={handleDelete}
                    >
                        del
                    </button>
                </li>
        </StyledItem>
    );
};

export default Item;

const StyledItem = styled.div`
        li {
            margin-left: 35%;
            margin-top: 5px;
            .todo_priority {
                color: rgb(255, 80, 120);
                margin-left: 5px;
                margin-right:10px;
            }
            button {
                background-color: #fff;
                color: rgb(80, 120, 255);
                margin-left: 5px;
            }
        }
`;