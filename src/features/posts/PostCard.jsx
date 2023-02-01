import './PostCard.css'

function PostCard({title,content}){
    return(
        <div className="post">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default PostCard;