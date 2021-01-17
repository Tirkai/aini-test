import { Button } from "@tirkai/aini";
import React from "react";
import "./App.css";
import { GhostButton } from "./components/button/GhostButton";
import logo from "./logo.svg";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5, auto)",
                        gridGap: "8px",
                    }}
                >
                    <Button variant="primary">Action</Button>
                    <Button variant="success">Aprove</Button>
                    <Button variant="danger">Reject</Button>
                    <Button>Also</Button>
                    <GhostButton />

                    <GhostButton />
                </div>
            </header>
        </div>
    );
}

export default App;
