"use client";
import Link from "next/link";
import { AuthButton } from "./AuthButton";

export default function NavMenu() {
	return (
		<div>
			<AuthButton />			
		</div>
	);
}

export function Navigation() {
  return (
		<div>
			<Link href='/protected'>protected area</Link>
			<br />
			<Link href='/server-action'>Server action example</Link>
			<br />
			<Link href='/api/whoAmi'>Server action example</Link>
			<br />
			<Link href='/apiFromClient'>go to apiFromClient</Link>
			<br />
			<Link href='/apiFromServer'>go to apiFrom Server</Link>
		</div>
	);
}
