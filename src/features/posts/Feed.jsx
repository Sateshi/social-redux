import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addPost } from "./postSlice";
import PostCard from "./PostCard";
import './Feed.css'

function Feed(){
    const [errorMessage,setErrorMessage] = useState([]);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post)

    const handleSubmit = (e) => {
        let error = [];
        e.preventDefault()
        if(!e.target[0].value)
            error.push("Please fill in the title");
        if(!e.target[1].value)
            error.push("Please fill in the text");
        setErrorMessage(error);
        if(error.length === 0){
            dispatch(addPost({
                id: posts.length +1,
                title: e.target[0].value,
                content: e.target[1].value
            }))
            e.target[0].value = "";
            e.target[1].value = "";
        }
    }

    return(
        <>
            <div className="feed">
            <h2>Posts</h2>
            <ul>
                {errorMessage.map(item => {
                    return <li className="error-message">{item}</li>
                })}
            </ul>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <input type="text" name="" id="" placeholder="Titre"/>
                <input type="text" placeholder="Votre message" />
                <input type="submit" value="SUBMIT" className="submit-input" />
            </form>
                {posts.map((item) => {
                    return <PostCard title={item.title} content={item.content} key={item.id} />
                })}
            </div>
        </>
    )
}

export default Feed;