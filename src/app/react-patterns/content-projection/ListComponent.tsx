import { ItemBase, ListProps } from "./types";

// We don't want to export this component.
// It's internal implementation detail.
const ListItem = (props: ItemBase) => (
	<li className='list-item list-disc p-2'>{props.content}</li>
);

export const List = <T extends ItemBase>({
	items,
	header,
	footer,
	children,
}: ListProps<T>) => {
	return (
		<div className='list-container'>
			{header}
			{/* Here the all magic happens. We're calling in
      each iteration provided function as a child. */}
			<ul className='list'>
				{items.map((item, index) => children({ item, index, ListItem }))}
			</ul>
			{footer}
		</div>
	);
};
