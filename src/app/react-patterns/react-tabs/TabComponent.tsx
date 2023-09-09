"use client";
import { useState } from "react";
import Tab from "./Tab";

export default function TabComponent() {
	const [value, setValue] = useState(0);

	return (
		<>
			<Tab currenTab={value} onChange={setValue}>
				<Tab.HeadContainer>
					<div>Tab container - curr tab: {value}</div>
					<Tab.Item label='tab1' index={1} />
					<Tab.Item label='tab2' index={2} />
					<Tab.Item label='tab3' index={3} />
				</Tab.HeadContainer>
				<Tab.ContentContainer>
					<Tab.ContentItem index={1}>
						<h1>Im a content item 1</h1>
					</Tab.ContentItem>
					<Tab.ContentItem index={2}>
						<h1>Im a content item 2</h1>
					</Tab.ContentItem>
					<Tab.ContentItem index={3}>
						<h1>Im a content item 3</h1>
					</Tab.ContentItem>
				</Tab.ContentContainer>
			</Tab>
		</>
	);
}
