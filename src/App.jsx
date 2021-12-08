import "./App.css";
import vm from "./vm";
import { observer } from "mobx-react";
import React from "react";

function App() {
    return (
        <div className="App">
            <h1>Cow Counter</h1>
            <p id="cow-count">
                Cows Counted:{" "}
                <span id="cow-count-number">{vm.cowsCounted}</span>
            </p>
            <button
                id="cow-count-button"
                onClick={() => {
                    vm.countCow();
                }}
            >
                Count Cow
            </button>
        </div>
    );
}

export default observer(App);
