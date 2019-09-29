import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get("https://reqres.in/api/users").then(res => {
			setPosts(res.data.data);
		});
	}, []);

	if (!posts) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			{posts.map((post, i) => (
				<div key={i}>
					<h3>{post.email}</h3>
					<p>
						{post.first_name} {post.last_name}
					</p>
					<img src={post.avatar} alt="random avatar" />
				</div>
			))}
		</div>
	);
};

export default PostList;
