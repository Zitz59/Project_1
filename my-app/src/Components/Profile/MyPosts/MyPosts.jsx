import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div className={s.textarea}>
          <textarea></textarea>
          <button>Add Post</button>
          <button>Remove</button>
        </div>
        <div className={s.posts}>{postElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
