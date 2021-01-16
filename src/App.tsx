import React from "react";
import "./App.css";
import { Button } from "./components/button/Button";
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
                        gridTemplateColumns: "repeat(4, auto)",
                        gridGap: "8px",
                    }}
                >
                    <Button variant="primary">Action</Button>

                    <Button variant="success">Approve</Button>
                    <Button variant="danger">Reject</Button>
                    <Button>Also</Button>
                </div>
            </header>
        </div>
    );
}

export default App;
