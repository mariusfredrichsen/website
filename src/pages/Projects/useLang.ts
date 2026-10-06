import { useState } from "react";
import type { Lang } from "../CV/cv_content";

const KEY = "projects-lang";

function readStored(): Lang {
	try {
		const stored = window.localStorage.getItem(KEY);
		if (stored === "en" || stored === "no") return stored;
	} catch {
		// Storage can be blocked; fall back to the default.
	}
	return "en";
}

// Same EN / Norsk toggle as the CV, remembered so the index and detail pages agree.
export function useLang(): [Lang, () => void] {
	const [lang, setLang] = useState<Lang>(readStored);

	const toggle = () => {
		const next: Lang = lang === "en" ? "no" : "en";
		setLang(next);
		try {
			window.localStorage.setItem(KEY, next);
		} catch {
			// Not remembered, still switches for this visit.
		}
	};

	return [lang, toggle];
}
