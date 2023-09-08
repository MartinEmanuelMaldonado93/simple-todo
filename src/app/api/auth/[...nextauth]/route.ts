import { env } from "@/environments";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

// export const authOptions = {
// 	providers: [
// 		GithubProvider({
// 			clientId: env.GITHUB_ID,
// 			clientSecret: env.GITHUB_SECRET,
// 		}),
// 	],
// };

export const handler = NextAuth({
	providers: [
		GithubProvider({
			clientId: env.GITHUB_ID,
			clientSecret: env.GITHUB_SECRET,
		}),
	],
	callbacks: {
		async redirect({ url, baseUrl }) {
			// Allows relative callback URLs
			if (url.startsWith("/")) return `${baseUrl}${url}`;
			// Allows callback URLs on the same origin
			else if (new URL(url).origin === baseUrl) return url;
			return baseUrl;
		},
	},
});
export { handler as GET, handler as POST };
