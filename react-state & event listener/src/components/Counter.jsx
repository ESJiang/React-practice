import { useState } from "react";
export const Counter = () => {
    const [count, setCount] = useState(0);
    return <p onClick={() => setCount(count => count + 1)}>current count number is: {count}</p>;
};
