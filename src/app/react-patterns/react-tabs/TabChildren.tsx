"use client";
import { Button } from "components/ui/button";
import { useContext } from "react";
import { TabCtx } from "./Tab";

export default function TabChildren({ tabNumber }: { tabNumber: number }) {
	const tabContext = useContext(TabCtx);

	return (
		<Button
			className='block'
			onClick={() => tabContext.onChange && tabContext.onChange(tabNumber)}
		>
			Tab number: {tabNumber}
		</Button>
	);
}
