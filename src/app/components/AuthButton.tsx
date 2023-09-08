"use client";
import { Button } from "components/ui/button";
import { Label } from "components/ui/label";
import { signIn, signOut, useSession } from "next-auth/react";

export function AuthButton() {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<span>Hello </span>
				{session?.user?.name}
				<br />
				<button onClick={() => signOut()}>Sign Out</button>
			</>
		);
	}

	return (
		<div className='flex justify-around items-center'>
			<Label>Not signed in</Label>
			<Button variant={"secondary"} onClick={() => signIn()}>
				sign in
			</Button>
		</div>
	);
}
