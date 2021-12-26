import style from './Main.module.css';
import Post from '../Posts/Post';

const Main = ({
    posts
}) => {
    return(
        <main className={style.mainCointainer}>
            <h1>Soooooo heading</h1>
            <div className="posts">
                {posts.map(p=> 
                    <Post key={p.id} author={p.author} >{p.content}</Post>
                )}
            </div>
        </main>
    )
}

export default Main;