import { headers } from "next/headers";

export default async function ApiFromServer() {
	const baseUrl = "http://localhost:3000/api/whoAmi";

	const resp = await fetch(baseUrl, {
		method: "GET",
		headers: headers(),
	}).then((res) => res.json());

	return (
		<>
			<div>
				Api route from SErver
				<div>NAME : {resp?.firstName}</div>
			</div>
		</>
	);
}
