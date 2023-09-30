import React, { useState, useEffect } from "react";

export function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        fetch("//jsonplaceholder.typicode.com/users", { signal: controller.signal })
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(e => {
                if (e?.name === "AbortError") return;
                console.error(e);
                setError("Error fetching data");
            })
            .finally(() => setLoading(false));
        return () => controller.abort();
    }, []);

    let result;
    if (loading) result = <h2>Loading</h2>;
    else if (error) result = <h2>{error}</h2>;
    else
        result = (
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} {user.email}
                    </li>
                ))}
            </ul>
        );
    return (
        <>
            <h1>User List</h1>
            {result}
        </>
    );
}
