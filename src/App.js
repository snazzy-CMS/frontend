import React from "react";
import AuthenticationView from "./components/Login/AuthenticationView";
import PostList from "./components/PostList";

const App = () => {
	return (
		<div>
			<h1>Hello World</h1>
			<AuthenticationView />
			<PostList />
		</div>
	);
};

export default App;
