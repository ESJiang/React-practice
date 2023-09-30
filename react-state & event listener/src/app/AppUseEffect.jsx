import { useState, useEffect } from "react";

export default function AppUseEffect() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     console.log(`age has changed to ${age}`);
    // }, [age]);

    useEffect(() => {
        document.title = name;
    }, [name]);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    useEffect(() => {
        const handler = () => console.log(name);
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, [name]);

    return (
        <div>
            <hr />
            <input value={name} onChange={e => setName(e.target.value)} />
            <br />
            <br />
            <button onClick={() => setAge(age => age - 1)}>-</button>
            <button onClick={() => setAge(age => age + 1)}>+</button>
            <br />
            <br />
            My name is {name} and I am {age} years old.
            <br />
            <br />
            {width}
            <hr />
        </div>
    );
}
