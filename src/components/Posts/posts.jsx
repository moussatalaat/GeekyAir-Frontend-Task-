import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './posts.css';



const Posts = () => {

    const params = useParams();
    const [filtar , setFiltar] = useState([]);

    const fetchData = async () => {
        return await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => { 
            setFiltar(filterPosts(data));
            });
    };

    const filterPosts = (data)=>{
        return data.filter((item)=> item.userId == params.id)
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            {filtar.map((post,index)=><div key={post.id}>
                <div className="Card">
                <div className="upper-container">
                    <div className="lower-container">
                        <h1>ID: {post.id}</h1>
                        <h1>Title:</h1>
                        <h3> {post.title}</h3>
                        <h1>Body:</h1>
                        <h3> {post.body}</h3>
                    </div>
                </div>
            </div>
            </div>)}
        </div>
    )
}

export default Posts