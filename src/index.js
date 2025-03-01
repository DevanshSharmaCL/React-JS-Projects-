import React from "react";
import ReactDOM from "react-dom/client";
import Hello_World from "./Projects/Hello_World";
import Counter from "./Projects/Counter";
import UserInput from "./Projects/UserInput";
const root = ReactDOM.createRoot(document.getElementById('root')); // Corrected
root.render(
    <React.StrictMode>
        {/* <Hello_World /> */}
        {/* <Counter /> */}
        <UserInput />
    </React.StrictMode>
);
 