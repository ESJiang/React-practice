import { useState } from "react";
const INITIAL_VALUE = ["A", "B", "C"];
export default function AppArray() {
    const [array, setArray] = useState(["A", "B", "C"]);
    const [value, setValue] = useState("");
    function removeFirstLetter() {
        setArray(array => array.slice(1));
    }
    function removeSpecificLetter(letter) {
        setArray(array => array.filter(item => item !== letter));
    }
    function addElementStart(letter) {
        setArray(array => [letter, ...array]);
    }
    function addElementEnd(letter) {
        setArray(array => [...array, letter]);
    }
    function clearArray() {
        setArray([]);
    }
    function resetArray() {
        setArray(INITIAL_VALUE);
    }
    function updateAtoH() {
        setArray(array => array.map(item => (item === "A" ? "H" : item)));
    }

    function addLetterAtIndex(letter, index) {
        setArray(array => [...array.slice(0, index), letter, ...array.slice(index)]);
    }
    return (
        <div>
            <button onClick={removeFirstLetter}>Remove First Element</button>
            <br />
            {array.join(", ")}
            <hr />
            <button onClick={() => removeSpecificLetter("B")}>Remove Specific Elements B</button>
            <hr />
            <button onClick={() => addElementStart("D")}>add element start</button>
            <hr />
            <button onClick={() => addElementEnd("D")}>add element end</button>
            <hr />
            <button onClick={clearArray}>clear array</button>
            <hr />
            <button onClick={resetArray}>reset array</button>
            <hr />
            <button onClick={updateAtoH}>update A to H</button>
            <hr />
            <button onClick={() => addLetterAtIndex("C", 2)}>addLetterAtIndex</button>
            <hr />
            <input value={value} onChange={e => setValue(e.target.value)} />
        </div>
    );
}
