import { forwardRef, ForwardRefExoticComponent, RefAttributes, useRef, useState, useEffect } from "react";

const Comp3 = forwardRef(
	(props: Comp1Props, ref: React.Ref<HTMLDivElement>) => (
		<div ref={ref} className='comp1'>
			Hey I am comp3 width: {props.width}
      <input type="text" />
		</div>
	)
);

export function Parent(
	OtherCompRef: ForwardRefExoticComponent<
		Comp1Props & RefAttributes<HTMLDivElement>
	>
) {
	const compRef = useRef<HTMLDivElement>(null!);
	const OthercompRef = useRef<HTMLDivElement>(null!);
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (compRef.current) {
			setWidth(compRef.current.offsetWidth);
			setHeight(compRef.current.offsetHeight);
		}
	}, [compRef]);

	return (
		<div>
			<span>hello</span>
			<Comp3 height={0} ref={compRef} />
			<OtherCompRef height={0} ref={OthercompRef} />
		</div>
	);
}
