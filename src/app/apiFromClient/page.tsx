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
		<div>
			ApiTestPage
			<div>Name: {name}</div>
		</div>
	);
}
