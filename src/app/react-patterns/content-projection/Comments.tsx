import { List } from "./ListComponent";
import { comments } from "./data";
import type { Comment } from "./types";

export const Comments = () => {
	function handleClick() {
		console.log(" handle click ");
	}
	return (
		<List<Comment>
			items={comments}
			onClick={handleClick}
			className='my-class'
			id='my-id'
		>
			{ ({ item, ListItem }) => 
      <ListItem {...item} key={item.id} />}
		</List>
	);
};
