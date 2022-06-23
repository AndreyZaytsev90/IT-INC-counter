import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import {Settings} from "./components/Settings";

function App() {
    return (
        <div>
            <Counter/>
            <Settings/>
        </div>
    )
}

export default App;
