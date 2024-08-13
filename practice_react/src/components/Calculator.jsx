import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("0.0");

    const handleButtonClick = (value) => {
        if (value === "=") {
            try {
                // Use eval() to evaluate the expression, but be cautious with its use
                const calculatedResult = eval(input);
                setResult(calculatedResult);
            } catch (error) {
                setResult("Error");
            }
        } else {
            setInput((prev) => prev + value);
        }
    };

    const handleClear = () => {
        setInput("");
        setResult("");
    };

    return (
        <div className="calculator">
            <div>
                <input className="display" type="text" value={input} readOnly />
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                <button onClick={() => handleButtonClick("1")}>1</button>
                <button onClick={() => handleButtonClick("2")}>2</button>
                <button onClick={() => handleButtonClick("3")}>3</button>
                <button onClick={() => handleButtonClick("+")}>+</button>
                <button onClick={() => handleButtonClick("4")}>4</button>
                <button onClick={() => handleButtonClick("5")}>5</button>
                <button onClick={() => handleButtonClick("6")}>6</button>
                <button onClick={() => handleButtonClick("-")}>-</button>
                <button onClick={() => handleButtonClick("7")}>7</button>
                <button onClick={() => handleButtonClick("8")}>8</button>
                <button onClick={() => handleButtonClick("9")}>9</button>
                <button onClick={() => handleButtonClick("*")}>*</button>
                <button onClick={() => handleButtonClick("0")}>0</button>
                <button onClick={handleClear}>C</button>
                <button onClick={() => handleButtonClick("=")}>=</button>
                <button onClick={() => handleButtonClick("/")}>/</button>
            </div>
        </div>
    );
};

export default Calculator;
