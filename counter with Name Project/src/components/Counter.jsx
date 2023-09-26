import { useState } from "react";
export function Counter() {
    const [value, setValue] = useState("");
    const [age, setAge] = useState(0);
    function decrease() {
        setAge(age => age - 1);
    }
    function increase() {
        setAge(age => age + 1);
    }
    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <br />
            <button onClick={decrease}>-</button>
            <span>{age}</span>
            <button onClick={increase}>+</button>
            <p>
                My name is {value} and I am {age} years old.
            </p>
        </div>
    );
}
