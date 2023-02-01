import { useSelector, useDispatch } from "react-redux";
import PostCard from "./PostCard";
import './Feed.css'

function Feed(){
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.dir(e.target[0].value);
    }
    return(
        <>
            <div className="feed">
            <h2>Posts</h2>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <input type="text" name="" id="" />
                <input type="text" />
                <input type="submit" value="DESTATI" />
            </form>
                {posts.map((item,index) => {
                    return <PostCard title={item.title} content={item.content} key={index} />
                })}
            </div>
        </>
    )
}

export default Feed;