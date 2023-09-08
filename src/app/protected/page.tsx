import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProtectedRoute() {
	const session = await getServerSession();

	if (!session || !session.user) {
		redirect("/api/auth/signin");
	}

	return (
		<div>
			This is a protected route.
			<br />
			You will only see this if you are authenticated. ! 😽
      <div>
        <Link href='/'> go back </Link>
      </div>
		</div>
	);
}
