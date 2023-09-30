import { useState, useEffect } from "react";
export default function AppRenderList() {
    const [item, setItem] = useState([
        { id: crypto.randomUUID(), name: "Item 1" },
        { id: crypto.randomUUID(), name: "Item 2" },
    ]);

    useEffect(() => {
        if (item.length > 2) {
            const newItem = item.at(-1);
            alert(`${newItem.id} has been added.`);
        }
    }, [item]);
    return (
        <>
            <button onClick={() => setItem(item => [...item, { id: crypto.randomUUID(), name: "New Item" }])}>add item</button>
            <pre>
                {item.map(item => {
                    return (
                        <div key={item.id}>
                            <div>{item.name}</div>
                            <input type='text' />
                        </div>
                    );
                })}
            </pre>
        </>
    );
}
