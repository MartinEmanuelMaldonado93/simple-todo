"use client";
import { forwardRef } from "react";
import withDimensionsWrapper from "./withDimension";

export default withDimensionsWrapper(forwardRef(Comp2));

function Comp2(props: Comp1Props, ref: React.Ref<HTMLDivElement>) {
	return (
		<div ref={ref} className='comp2'>
			Hey I am comp2 width: {props.width}
		</div>
	);
}

