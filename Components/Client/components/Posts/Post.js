import style from './Post.module.css';

const Post = (props) => {
    return(
        <div className={style.post}>
            <img src="blue-origami-bird.png" alt="post-origami" />
            <p className={style.description}>{props.children}</p>
            <div className={style.postContent}>
                <span>
                    <small>Author:</small>
                    {props.author}
                </span>
            </div>
        </div>
    )
}

export default Post;