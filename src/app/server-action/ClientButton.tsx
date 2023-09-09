"use client";
import { Button } from "components/ui/button";
import { useState } from "react";

export default function WhoAmIButton({
	whoAmIAction,
}: {
	whoAmIAction: () => Promise<string>;
}) {
	const [name, setName] = useState("");

	return (
		<div className='flex flex-wrap justify-center gap-2 m-4'>
			<Button
				onClick={async () => {
					setName(await whoAmIAction());
				}}
			>
				Who am I ?
			</Button>
			<div className='grow w-full text-center'>
				{name && <div>You are {name} !!!</div>}
			</div>
		</div>
	);
}
