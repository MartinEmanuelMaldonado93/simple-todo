import { useState } from "react";

export default function Input({
	...props
}: JSX.IntrinsicElements["div"] & {
	renderTextBelow: (value: string) => JSX.Element;
}) {
	const [value, setValue] = useState("");

	return (
		<div {...props}>
			<input type='text' onChange={({ target }) => setValue(target.value)} />
			{props.renderTextBelow(value)}
		</div>
	);
}
