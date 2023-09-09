import { baseUrl } from "@/environments";
import { headers } from "next/headers";

export default async function ApiFromServer() {
	const URL = `${baseUrl}/api/whoAmi`;

	const resp = await fetch(URL, {
		method: "GET",
		headers: headers(),
	}).then((res) => res.json());

	return (
		<>
			<div className='flex justify-between items-center m-4'>
				Api route from Server
				<div>
					Name :{" "}
					<span className='bg-primary-foreground p-2'>{resp?.firstName}</span>
				</div>
			</div>
		</>
	);
}
