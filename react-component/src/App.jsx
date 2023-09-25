import userInfo from "./user.json";
import { UserCard } from "./UserCard";
import { UserCardClass } from "./UserCardClass";
import "./user.css";
export default function App() {
    return (
        <div>
            <UserCard user={userInfo} />
            <br />
            <UserCardClass user={userInfo} />
        </div>
    );
}
