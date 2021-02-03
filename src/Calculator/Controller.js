import React, { useState } from 'react';
import './Controller.css';
import Bottom from './Bottom';

const data = [
    { id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" },
    { id: "7" }, { id: "8" }, { id: "9" }, { id: "0" }, { id: "+" }, { id: "-" },
    { id: "/" }, { id: "*" }, { id: "=" }, { id: "C" }]

const Controller = () => {
    const [result, setResult] = useState("");
    const cal = (id) => {
        if (id === "=") {
            setResult(eval(result));
        }
        else if (id === "C") {
            setResult("");
        }
        else {
            setResult(result + id);
        }
    }
    return <div id="Calculator">
        <div id="total">{result}</div>
        <Bottom data={data} cal={cal} />
    </div>
}
export default Controller;