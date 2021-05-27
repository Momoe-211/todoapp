import React from 'react'
import styled from "styled-components";

const priority = [
    { number: "★★★", star: "★★★" },
    { number: "☆★★", star: "☆★★" },
    { number: "☆☆★", star: "☆☆★" },
];

const InputForm = ({inputText, setInputText, add, setSelectPriority, selectPriority}) => {

    return (
        <>
        <StyledInputForm>
            <p>タスク</p>
            <div>
                <input 
                    value={inputText} 
                    onChange={(e) => setInputText(e.target.value)} 
                    type="text" 
                />
                <select 
                    value={selectPriority}
                    onChange={(e) => setSelectPriority(e.target.value)}
                >
                    {
                        priority.map((pr) => (
                            <option key={pr.number} value={pr.number}>
                                {pr.star}
                            </option>
                        ))
                    }
                </select>
                <button onClick={() => add(inputText, selectPriority)}>add</button>
            </div>
        </StyledInputForm>
        </>
    );
};

export default InputForm;

const StyledInputForm = styled.div`
    p {
        text-align: center; 
        font-weight: bold;
    }
    div {
        position: relative;
        left: 35%;
        select {
            color: rgb(255, 80, 120);
        }
        button {
            background-color: #fff;
            color: rgb(255, 80, 120);
        }
    }
`