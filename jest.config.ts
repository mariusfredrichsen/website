import type { Config } from "jest";

const config: Config = {
	preset: "ts-jest",
	testEnvironment: "node",
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageReporters: ["lcov", "text"],
	collectCoverageFrom: [
		"src/**/*.{ts,tsx}",
		"!**/node_modules/**",
		"!**/vendor/**",
	],
};

export default config;
