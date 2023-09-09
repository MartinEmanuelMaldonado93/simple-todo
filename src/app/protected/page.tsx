import { Button } from "components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProtectedRoute() {
	const session = await getServerSession();

	if (!session || !session.user) {
		redirect("/api/auth/signin");
	}

	return (
		<div className='grid justify-center gap-2 text-center m-2'>
			[ protected route ]
			<br />
			You will only see this if you are authenticated!
			<div>
				<Link href='/'>
					<Button variant={"outline"}> go back home 😽</Button>
				</Link>
			</div>
		</div>
	);
}
