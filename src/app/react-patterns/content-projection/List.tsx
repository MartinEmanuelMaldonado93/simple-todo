import { List } from "./ListComponent";
import { comments } from "./data";
import type { Comment } from "./types";


export const Comments = () => {
	return (
		<List<Comment> items={comments}>
			{({ item, ListItem }) => <ListItem {...item} key={item.id} />}
		</List>
	);
};

export const CommentsWithOwnListItem = () => {
	return (
		<List<Comment> items={comments}>
			{({ item }) => (
				<li key={item.id} className='different-item'>
					{item.content}
				</li>
			)}
		</List>
	);
};

export const CommentsWithHeaderAndFooter = () => {
	return (
		<List<Comment>
			items={comments}
			header={<h1>My header!</h1>}
			footer={
				<footer>
					<button>First click button</button>
					<button>Second button</button>
				</footer>
			}
		>
			{({ item, ListItem }) => <ListItem {...item} key={item.id} />}
		</List>
	);
};
