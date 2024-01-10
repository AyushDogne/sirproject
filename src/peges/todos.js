import { memo } from "react";

const Todos = ({ todos,addtodos }) => {
    console.log("child render");
    return (
    <>
    <h2>My Todos</h2>
    <button onClick={addtodos}>add todos</button> 
    {todos.map((todo, index) => {
    return <p key={index}>{todo}</p>;
    })}
    </>
    );
    };
    export default memo (Todos);