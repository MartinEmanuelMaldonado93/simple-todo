import { getServerSession } from "next-auth";
import WhoAmIButton from "./WhoAmIButton";

export default async function ServerActions() {
	const whoAmI = async () => {
		"use server";
		const session = await getServerSession();
		return session?.user?.name ?? "Not logged in";
	};
	return (
		<div>
			<WhoAmIButton whoAmIAction={whoAmI}></WhoAmIButton>
		</div>
	);
}
