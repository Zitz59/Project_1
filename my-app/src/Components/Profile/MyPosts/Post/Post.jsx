import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d68aa4fbf50d500ae1fc85c_5d68aa529515ee00ad017e35/scale_1200" />
      {props.message}
      <div>
        <span>Likes</span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
