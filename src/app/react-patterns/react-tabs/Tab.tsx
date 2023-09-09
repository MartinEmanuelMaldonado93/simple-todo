"use client";
import { Button } from "components/ui/button";
import React, { Dispatch, createContext, useContext } from "react";

type tabProps = {
	onChange?: Dispatch<React.SetStateAction<number>>;
	children?: JSX.Element | JSX.Element[];
	currenTab: number;
};

export const TabCtx = createContext<tabProps>({ currenTab: 0 });

export default function Tab({ currenTab, onChange, children }: tabProps) {
	return (
		<TabCtx.Provider value={{ currenTab, onChange }}>
			{children}
		</TabCtx.Provider>
	);
}

Tab.HeadContainer = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	return <div className='border p-2 rounded-sm'>{children}</div>;
};

Tab.Item = ({ label, index }: { label: string; index: number }) => {
	const { currenTab, onChange } = useContext(TabCtx);
	return (
		<Button
			variant={"outline"}
			className={currenTab === index ? "bg-primary-foreground" : ""}
			onClick={() => onChange!(index)}
		>
			{label}
		</Button>
	);
};

Tab.ContentContainer = ({
	children,
}: {
	children?: JSX.Element | JSX.Element[];
}) => {
	return <div className='flex'>{children}</div>;
};

Tab.ContentItem = ({
	children,
	index,
}: {
	children?: JSX.Element;
	label?: string;
	index?: number;
}) => {
	const { currenTab } = useContext(TabCtx);
	return currenTab === index ? (
		<div className='bg-primary-foreground p-2 rounded-md'>{children}</div>
	) : null;
};
