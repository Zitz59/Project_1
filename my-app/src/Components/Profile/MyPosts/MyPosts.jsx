import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

let postData = [
	{ id:1, message: 'Hello , world!', likeCount: 20},
	{ id:2, message: 'It\'s my first post!', likeCount: 15}
]







	return (
		<div className={s.content}>
			<div>
				My posts
				<div className={s.textarea}>
					<textarea ></textarea>
					<button>Add Post</button>
					<button>Remove</button>
				</div>
				<div className={s.posts}>
					<Post message = {postData[0].message} likeCount = {postData[0].likeCount}/>
					<Post message = {postData[1].message} likeCount = {postData[1].likeCount}/> 
				</div>
			</div>
		</div>
	)
}

export default MyPosts;