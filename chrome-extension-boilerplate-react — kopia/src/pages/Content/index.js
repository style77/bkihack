import {fetchPosts, writePost} from "./modules/fetchPosts";

console.log('Fetching posts');

const fetchPostsWithTimeout = () => {
	let intervalId = setInterval(() => {
		const posts = fetchPosts();
        const write = writePost();
		if (posts.length > 0) {
			clearInterval(intervalId);
		}
	}, 5000);
} 

fetchPostsWithTimeout()
