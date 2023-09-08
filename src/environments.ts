import { Output, object, parse, string } from "valibot"; // 0.87 kB

const envSchema = object({
  GITHUB_SECRET: string(),
  GITHUB_ID: string(),
});

type EnviromentsType = Output<typeof envSchema>;

export const env = parse(envSchema, {
	GITHUB_ID: process.env.GITHUB_ID,
	GITHUB_SECRET: process.env.GITHUB_SECRET,
  fake: process.env.fakekey,
});
