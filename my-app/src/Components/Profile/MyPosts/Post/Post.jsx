import s from './Post.module.css'
const Post = () => {
	return (
		<div className={s.item}>
			<img src="https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d68aa4fbf50d500ae1fc85c_5d68aa529515ee00ad017e35/scale_1200" />
			post 1
			<div>
				<span>Like</span>
			</div>
		</div>

	)
}

export default Post;