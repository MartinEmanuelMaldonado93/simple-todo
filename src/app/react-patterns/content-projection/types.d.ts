import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

// Base model for the ListItem component props.
export interface ItemBase {
	id: string;
	content: string;
}

// Passed generic type must have at least "id" and "content".
export interface ListItemInjectedProps<T extends ItemBase> {
	item: T;
	index: number;
	ListItem: (props: ItemBase) => ReactNode;
}

export interface ListProps<T extends ItemBase> {
	items: T[];
	// We'll inject the "ListItem" component from children to parent
	// and the parent will decide what should be rendered.
	children: (props: ListItemInjectedProps<T>) => ReactNode;
	header?: ReactNode;
	footer?: ReactNode;
}

export interface ItemBase {
	id: string;
	content: string;
}
// That's the native div element type definition.
type NativeContainerProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;
// Here we removed the "children" property with "Omit".
// It's because we're using our own - the function
// passed as a child!
interface ListContainerProps extends Omit<NativeContainerProps, "children"> {}

export interface ListItemInjectedProps<T extends ItemBase> {
	item: T;
	index: number;
	ListItem: (props: ItemBase) => ReactNode;
}
// Here we merge our own properties with native ones!
export interface ListProps<T extends ItemBase> extends ListContainerProps {
	items: T[];
	children: (props: ListItemInjectedProps<T>) => ReactNode;
	header?: ReactNode;
	footer?: ReactNode;
}

export interface Comment {
	id: string;
	content: string;
	date: string;
}
