import { useState } from "react";
export default function AppInput() {
    const [name, setName] = useState("jiang");
    return (
        <input
            type='text'
            value={name}
            onChange={e => {
                setName(e.target.value);
                console.log("currentName", name);
            }}
        />
    );
}
