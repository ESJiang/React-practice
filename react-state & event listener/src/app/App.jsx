import { useState } from "react";
import { Counter } from "../components/Counter";
export default function App() {
    // It's better to declare them separately, which will be easy to modify later
    const [name, setName] = useState("jiang");
    const [age, setAge] = useState(27);
    return (
        <div>
            <h1
                onClick={() => {
                    setName("sally");
                    // setAge(age + 1);
                    // setAge(age + 1);
                    setAge(currentAge => currentAge + 1);
                    setAge(currentAge => currentAge + 1);
                }}
            >
                Hi {name} {age}
            </h1>
            <Counter />
        </div>
    );
}
