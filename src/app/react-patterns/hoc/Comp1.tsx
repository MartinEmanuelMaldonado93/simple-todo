import { forwardRef } from "react";
import withDimensionsWrapper from "./withDimension";

export const Comp1 = withDimensionsWrapper(
	forwardRef(function CompOne(
		props: Comp1Props,
		ref: React.Ref<HTMLDivElement>
	) {
		return (
			<div ref={ref} className='comp1'>
				Hey I am comp1 width: {props.width}
			</div>
		);
	})
);

