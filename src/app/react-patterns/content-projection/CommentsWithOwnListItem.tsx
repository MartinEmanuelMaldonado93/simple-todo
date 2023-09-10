import { List } from "./ListComponent";
import { comments } from "./data";
import type { Comment } from "./types";

export const CommentsWithOwnListItem = () => {
	return (
		// Here we want to use our custom
		// list item component.
		<List<Comment> items={comments}>
			{({ item }) => (
				<li key={item.id} className='p-2 border rounded-md'>
					{item.content}
				</li>
			)}
		</List>
	);
};
