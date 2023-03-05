import { useState, useEffect } from "react";
import "./main.css";
import { Link } from "react-router-dom";

const Main = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setData(data));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {data.map((user, index) => (
                <div key={user.id} className="Card">
                    <div className="upper-container">
                        <div className="lower-container">
                            <h1>ID: {user.id}</h1>
                            <h3>Name: {user.name}</h3>
                            <h3>User Name: {user.username}</h3>
                            <h3>Email: {user.email}</h3>
                            <h3>Address Street: {user.address["street"]}</h3>
                            <h3>City: {user.address["city"]}</h3>
                            <h3>Phone: {user.phone}</h3>
                            <h3>Company: {user.company["name"]}</h3>
                            <a target={"_blank"} href={user.website}>
                                Website: {user.website}
                            </a>
                            <button>
                                <Link to={`/posts/${user.id}`} key={user.id}>
                                    {" "}
                                    Get Posts{" "}
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Main;
