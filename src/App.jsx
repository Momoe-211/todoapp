import React, { useState } from 'react';
import shortid from 'shortid';
import InputForm from "./InputForm";
import ItemList from "./ItemList";
import styled from "styled-components";

const App = () => {
    // const [todos, setTodos] = useState(["Prop8(Proof)", "資格の勉強", "洗濯物", "お迎え"]); //初期値を設定する

    const [todos, setTodos] = useState([
        { id: shortid.generate(), content: "Prop8(Proof)", priority: "★★★" },
        { id: shortid.generate(), content: "資格の勉強", priority: "☆★★"},
        { id: shortid.generate(), content: "とうらぶレベリング", priority: "☆★★"},
        { id: shortid.generate(), content: "野球見る", priority: "★★★"}
    ]);

    const [inputText, setInputText] = React.useState("");
    
    const [selectPriority, setSelectPriority] = useState("★★★");

    const [isDone, setIsDone] = useState(false);

    //add
    const add = (addValue, addPriority) => {
        if (addValue === "") {
            alert("文字を入力してください");
        } else {
            switch (addPriority) {
                case "☆☆★":
                    setTodos([...todos, { id: shortid.generate(), content: addValue, priority: addPriority }]);
                    break;    
                case "☆★★":
                    setTodos([...todos, { id: shortid.generate(), content: addValue, priority: addPriority }]);
                    break;
                default:
                    setTodos([...todos, { id: shortid.generate(), content: addValue, priority: addPriority }]);
            }
            // console.log(setInputText());  
            
        }
        setInputText("");
        // setTodos(["Prop8(Proof)", "資格の勉強", "洗濯物", "お迎え", "モンハンをする"])
    };
    
    //delete
    const deleteTodo = (index, check) => {
        if (check === false) {
            alert("タスクが完了していません。");
        } else {
            setTodos(todos.filter(todo => todo.id !== index));
            console.log(check);
        }
      };

    return (
        <StyledApp>
        <div>
            <h1>
                ToDo App
            </h1>
            <InputForm 
                add={add} 
                setTodos={setTodos} 
                inputText={inputText} 
                setInputText={setInputText} 
                selectPriority={selectPriority}
                setSelectPriority={setSelectPriority}
            />
            <ItemList 
                todos={todos} 
                deleteTodo={deleteTodo}
                isDone={isDone}
                setIsDone={setIsDone}
            />
        </div> 
        </StyledApp>
    );
};

export default App;

const StyledApp = styled.div`
    h1 {color: rgb(80, 120, 255);
        font-family: "Century Gothic"; 
        text-align: center; 
        background: linear-gradient(transparent 70%, #FFFF00 0%);
    }
`;