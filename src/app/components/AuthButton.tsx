"use client";
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
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>sign in</button>
		</>
	);
}
