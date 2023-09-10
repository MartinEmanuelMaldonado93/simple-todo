import { List } from "./ListComponent";
import { comments } from "./data";
import type { Comment } from "./types";

export const CommentsWithHeaderAndFooter = () => {
	return (
		// Here we added header and footer.
		<List<Comment>
			items={comments}
			header={<h1 className='text-center'>My header!</h1>}
			footer={
				<footer className='flex gap-2 '>
					<button className='border rounded-md p-2'>First click button</button>
					<button className='border rounded-md p-2'>Second button</button>
				</footer>
			}
		>
			{({ item, ListItem }) => (
				<ListItem {...item} key={item.id} />
			)}
		</List>
	);
};
