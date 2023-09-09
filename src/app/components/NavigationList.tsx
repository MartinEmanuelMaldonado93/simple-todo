"use client";
import { Button } from "components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
	const pathname = usePathname();

  return (
		<div className='p-4 bg-primary-foreground grid gap-4 justify-center'>
			<Link href='/'>
				<Button variant={pathname === "/" ? "default" : "secondary"}>
					Home
				</Button>
			</Link>
			<Link href='/protected'>
				<Button variant={pathname === "/protected" ? "default" : "secondary"}>
					protected area
				</Button>
			</Link>
			<Link href='/server-action'>
				<Button
					variant={pathname === "/server-action" ? "default" : "secondary"}
				>
					Server action example
				</Button>
			</Link>
			<Link href='/api/whoAmi'>
				<Button variant={pathname === "/api/whoAmi" ? "default" : "secondary"}>
					Server action API json example{" "}
				</Button>
			</Link>
			<Link href='/apiFromClient'>
				<Button
					variant={pathname === "/apiFromClient" ? "default" : "secondary"}
				>
					go to apiFromClient
				</Button>
			</Link>
			<Link href='/apiFromServer'>
				<Button
					variant={pathname === "/apiFromServer" ? "default" : "secondary"}
				>
					go to apiFrom Server
				</Button>
			</Link>
		</div>
	);
}
