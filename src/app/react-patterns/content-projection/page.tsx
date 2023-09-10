import { Comments } from "./Comments";
import { CommentsWithOwnListItem } from "./CommentsWithOwnListItem";
import { CommentsWithHeaderAndFooter } from "./CommentsWithHeaderAndFooter";

export default function App() {
	return (
		<div className='App'>
			{/* <Comments /> */}
			{/* <CommentsWithOwnListItem /> */}
			<CommentsWithHeaderAndFooter />
		</div>
	);
}
