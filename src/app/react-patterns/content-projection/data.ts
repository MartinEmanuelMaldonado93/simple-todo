import type { Comment } from "./types";

export const comments: Comment[] = [
	{
		id: "0",
		content: "My first comment brother!",
		date: new Date().toISOString(),
	},
	{
		id: "1",
		content: "My second comment brother!",
		date: new Date().toISOString(),
	},
];
