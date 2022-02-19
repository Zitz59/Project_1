import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
const Profile = (props) => {
  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1614914135224-925593607248?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      </div>
      <div>avatar + description</div>
      <div>
        <MyPosts posts={props.posts} />
      </div>
    </div>
  );
};

export default Profile;
