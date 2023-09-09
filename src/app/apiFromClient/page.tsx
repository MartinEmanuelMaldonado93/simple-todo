"use client";
import { useEffect, useState } from "react";

export default function ApiTestPage() {
	const [name, setName] = useState("");

	useEffect(() => {
		fetch("/api/whoAmi")
			.then((res) => res.json())
			.then((data) => {
				setName(data.firstName);

				console.log("here", data);
			});
	}, []);

	return (
		<div className='flex justify-between items-center m-4'>
			<div>ApiTestPage</div>
			<div>
				Name: <span className="bg-primary-foreground p-2">{name}</span>
			</div>
		</div>
	);
}
