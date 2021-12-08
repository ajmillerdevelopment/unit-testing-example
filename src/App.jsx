import "./App.css";
import vm from "./vm";
import { observer } from "mobx-react";
import React from "react";

function App() {
    const addCows = () => {
        const cow = document.createElement("span");
        const emoji = document.createTextNode("🐮");
        cow.appendChild(emoji);
        document.getElementById("cow-palace").appendChild(cow);
    };
    return (
        <div className="App">
            <h1 id="title">Cow Counter</h1>
            <p id="cow-count">
                Cows Counted:{" "}
                <span id="cow-count-number">{vm.cowsCounted}</span>
            </p>
            <button
                id="cow-count-button"
                onClick={() => {
                    vm.countCow();
                    addCows();
                }}
            >
                Count Cow
            </button>
            <div id="cow-palace"></div>
        </div>
    );
}

export default observer(App);
