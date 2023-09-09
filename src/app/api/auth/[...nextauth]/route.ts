import { env } from "@/environments";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const handler = NextAuth({
	providers: [
		GithubProvider({
			clientId: env.GITHUB_ID,
			clientSecret: env.GITHUB_SECRET,
		}),
	],
  theme : {
    colorScheme: 'dark',
  }
});
export { handler as GET, handler as POST };
