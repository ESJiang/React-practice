import React, { useState, useEffect } from "react";
export default function AppRenderList() {
    const [item, setItem] = useState([
        { id: crypto.randomUUID(), name: "Item 1" },
        { id: crypto.randomUUID(), name: "Item 2" },
    ]);
    return (
        <>
            <button
                onClick={() => {
                    alert(`${item.at(-1).id} has been added.`);
                    setItem(item => [...item, { id: crypto.randomUUID(), name: "New Item" }]);
                }}
            >
                add item
            </button>
            <pre>
                {item.map(item => {
                    return (
                        <React.Fragment key={item.id}>
                            <div>{item.name}</div>
                            <input type='text' />
                        </React.Fragment>
                    );
                })}
            </pre>
        </>
    );
}
