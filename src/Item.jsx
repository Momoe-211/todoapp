import React, {useState} from "react";
// import styles from "../styles/item.modele.css";
import styled from "styled-components";

const Item = ({todo, id, deleteTodo}) => {
    
    const [isDone, setIsDone] = useState(false);

    const handleDelete = () => {
        if (isDone === false) {
            alert("タスクが完了していません");
        } else {
            deleteTodo(id);
        }
    }

    return (
        <StyledItem>
                <li>
                    <input type="checkbox" onChange={() => {
                        setIsDone(!isDone)
                    }} />
                    <span 
                        style={{textDecoration: isDone ? 'line-through' : 'none'}}>
                        {todo.priority}
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
            button {
                background-color: #fff;
                color: rgb(80, 120, 255);
                margin-left: 5px;
            }
        }
`;