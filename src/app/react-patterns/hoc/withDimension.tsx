"use client";
import {
	ForwardRefExoticComponent,
	RefAttributes,
	forwardRef,
	useEffect,
	useRef,
	useState,
} from "react";

export default function withDimensionsWrapper(
	ForwardComponent: ForwardRefExoticComponent<
		Comp1Props & RefAttributes<HTMLDivElement>
	>
) {
	return function WithDimensions({
		...props
	}: ForwardRefExoticComponent<Comp1Props & RefAttributes<HTMLDivElement>>) {
		const compRef = useRef<HTMLDivElement>(null!);
		const [width, setWidth] = useState(0);
		const [height, setHeight] = useState(0);

		useEffect(() => {
			if (compRef.current) {
				setWidth(compRef.current.offsetWidth);
				setHeight(compRef.current.offsetHeight);
			}
		}, [compRef]);

		return (
			<ForwardComponent
				ref={compRef}
				width={width}
				height={height}
				{...props}
			/>
		);
	};
}
