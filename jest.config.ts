import type { Config } from "jest";

const config: Config = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageReporters: ["lcov", "text"],
	// CRITICAL: This tells Jest which files to actually measure
	collectCoverageFrom: [
		"src/**/*.{ts,tsx}",
		"!src/**/*.d.ts",
		"!src/main.tsx",
		"!src/vite-env.d.ts",
	],
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/__mocks__/fileMock.js",
	},
	transform: {
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				tsconfig: "tsconfig.json",
				// This helps with the import.meta errors
				diagnostics: {
					ignoreCodes: [1343],
				},
				astTransformers: {
					before: [
						{
							path: "ts-jest-mock-import-meta",
							options: {
								metaObjectReplacement:
									{
										env: {
											VITE_MAPBOX_TOKEN:
												"test",
										},
									},
							},
						},
					],
				},
			},
		],
	},
};

export default config;
