"use client";
import { Button } from "components/ui/button";
import { Label } from "components/ui/label";
import { signIn, signOut, useSession } from "next-auth/react";

export function AuthButton() {
	const { data: session } = useSession();

	if (session) {
		return (
			<div className='flex justify-between items-center m-4'>
				<span>Hello</span>
        <div className="bg-primary-foreground p-2">
				  {session?.user?.name}
        </div>
				<br />
				<Button variant={"secondary"} onClick={() => signOut()}>
					Sign Out
				</Button>
			</div>
		);
	}

	return (
		<div className='flex justify-around items-center m-4'>
			<Label>Not signed in</Label>
			<Button variant={"secondary"} onClick={() => signIn()}>
				sign in
			</Button>
		</div>
	);
}
