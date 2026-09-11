export type Lang = "en" | "no";
export type Variant = "concise" | "full";

export type ContactItem = {
	label: string;
	value: string;
};

export type SkillGroup = {
	label: string;
	items: string[];
};

export type Language = {
	name: string;
	level: string;
};

export type Headings = {
	contact: string;
	skills: string;
	languages: string;
	general: string;
	experience: string;
	education: string;
	projects: string;
	volunteer: string;
};

export type Experience = {
	role: string;
	org: string;
	period: string;
	desc: string;
	courses: string[];
	core?: boolean;
};

export type Project = {
	name: string;
	tech: string[];
	desc: string;
	details: string;
	core?: boolean;
};

export type TimelineItem = {
	role: string;
	org: string;
	period: string;
	core?: boolean;
};

export type CVContent = {
	name: string;
	title: string;
	summary: string;
	references: string;
	projectsNote: string;
	h: Headings;
	contact: ContactItem[];
	skills: SkillGroup[];
	languages: Language[];
	general: string[];
	experience: Experience[];
	projects: Project[];
	education: TimelineItem[];
	volunteer: TimelineItem[];
};

const en: CVContent = {
	name: "Marius Fredrichsen",
	title: "Full-Stack Developer",
	summary: "Informatics master's student and teaching assistant at the University of Oslo. I build full-stack web and mobile apps with React, Next.js, Nest.js and Kotlin — comfortable across frontend, backend and infrastructure.",
	references: "References available on request.",
	projectsNote: "github.com/mariusfredrichsen",
	h: {
		contact: "Contact",
		skills: "Skills",
		languages: "Languages",
		general: "General",
		experience: "Experience",
		education: "Education",
		projects: "Projects",
		volunteer: "Volunteering",
	},
	contact: [
		{ label: "Location", value: "Oslo, Norway" },
		{ label: "Phone", value: "+47 941 41 698" },
		{ label: "Email", value: "mariusfredrichsen@gmail.com" },
		{ label: "GitHub", value: "github.com/mariusfredrichsen" },
		{ label: "Website", value: "maef.no" },
		{ label: "Born", value: "15 Aug 2002" },
	],
	skills: [
		{
			label: "Languages & Frameworks",
			items: [
				"Python",
				"Java",
				"Kotlin",
				"C++",
				"React",
				"Next.js",
				"Nest.js",
				"PostgreSQL",
				"Docker",
				"Scheme",
			],
		},
		{
			label: "Tools",
			items: [
				"Git & GitHub",
				"VSCode",
				"Cursor",
				"Claude",
				"Android Studio",
				"Figma",
				"Fusion 360",
				"MongoDB",
			],
		},
	],
	languages: [
		{ name: "Norwegian", level: "Native" },
		{ name: "English", level: "Fluent" },
	],
	general: [
		"Comfortable working independently and in teams",
		"Driver's license (Class B)",
	],
	experience: [
		{
			role: "Software Engineering Intern",
			org: "Netcompany",
			period: "Jun – Jul 2026",
			desc: "Worked in an agile team on a real client case — scaled a production database, modeled the domain in C# with Entity Framework Core, and integrated AI-driven features.",
			courses: [],
		},
		{
			role: "Teaching Assistant & Grader",
			org: "University of Oslo",
			period: "Aug 2023 – Present",
			desc: "Run weekly seminar groups and grade assignments across four core computer-science courses:",
			courses: [
				"IN5320 — Development in Platform Ecosystems",
				"IN2000 — Software Engineering (project-based)",
				"IN2010 — Algorithms & Data Structures",
				"IN1010 — Object-Oriented Programming",
				"IN1000 — Intro to Object-Oriented Programming",
			],
		},
		{
			role: "Programming Instructor",
			org: "Oslo Summer School · YoungCoderz",
			period: "Jun – Jul 2024",
			desc: "Taught programming fundamentals (Scratch and Python) to 5th–6th grade students.",
			courses: [],
		},
	],
	projects: [
		{
			name: "maef.no — Personal Website",
			tech: ["React", "JavaScript", "Nginx"],
			details: "A React and Vite personal site that brings together my CV, GitHub and other work in one place. The app uses client-side routing and includes a run-tracking view with mapping dependencies, while leaving room for future games and visualizations. It is deployed behind Nginx and serves as an ongoing space to experiment with new web features.",
			desc: "My personal site linking to my CV and GitHub; expanding with small games and visualizations.",
		},
		{
			name: "Book-Locker System — FUI",
			tech: ["React", "Django", "Node", "Tailwind CSS"],
			details: "This was an agile project completed with five other students. The goal was to digitize the administration of the book lockers at the Department of Informatics and make the process easier to manage.",
			desc: "Agile team project with 5 other students to digitize and manage book lockers at the Department of Informatics.",
		},
		{
			name: "BåtBuddy",
			tech: ["Kotlin", "Android", "SQL", "Figma"],
			details: "Built by a six-student team for IN2000, BåtBuddy helps boaters in Norway plan day trips. Users can sketch or generate routes, view weather along a route, and save routes locally. The Android app combines Mapbox maps and routing with weather data from the Norwegian Meteorological Institute, Room persistence, Hilt dependency injection, coroutines and scheduled background updates.",
			desc: "Agile group project (IN2000): an Android weather app built on open data from the Norwegian Meteorological Institute.",
		},
		{
			name: "Discord Bot",
			tech: ["Python", "MongoDB"],
			details: "This is a spare-time project that brings several small utilities together in one bot. Alongside sorting-algorithm visualizations and a Kattis scoreboard, it includes an incremental game in progress and other Discord-focused features.",
			core: false,
			desc: "A Discord bot I build in my spare time — featuring sorting-algorithm visualizations, a Kattis scoreboard, an incremental game (WIP) and other small Discord-related utilities.",
		},
		{
			name: "Tangent Trim",
			tech: ["Arduino (C++)", "GitHub", "Fusion 360"],
			details: "A user-centred design project in IN1060 developed with residents and staff at a nursing home in Oslo. We conducted interviews and observations, analysed user needs, and iteratively developed physical prototypes. The final Tangent Trim prototype is a piano-inspired Arduino/C++ device using familiar music to motivate physical activity among older adults.",
			core: false,
			desc: "A design project in IN1060 (User-Oriented Design) on the design process and digital/physical prototyping for a chosen user group.",
		},
	],
	education: [
		{
			role: "M.Sc. Informatics — Programming & System Architecture",
			org: "University of Oslo",
			period: "Aug 2025 – Jun 2027",
		},
		{
			role: "B.Sc. Informatics (self-composed)",
			org: "University of Oslo",
			period: "Aug 2022 – Jun 2025",
		},
		{
			role: "Specialization in General Studies w/ Research Line",
			org: "Upper Secondary School in Drammen",
			period: "Aug 2018 – Jun 2021",
			core: false,
		},
	],
	volunteer: [
		{
			role: "Vice-Leader",
			org: "VIFI — Volleyball IFI Student Association",
			period: "Jan – Jun 2026",
		},
		{
			role: "Board Member",
			org: "Defi — Informatics Student Association",
			period: "Jan – Jun 2025",
		},
		{
			role: "Member",
			org: "Defi — Informatics Student Association",
			period: "Aug 2024 – Dec 2025",
			core: false,
		},
		{
			role: "Intern",
			org: "Cybernetisk Selskab — Escape student bar",
			period: "Feb – Jun 2024",
			core: false,
		},
	],
};

const no: CVContent = {
	name: "Marius Fredrichsen",
	title: "Fullstack-utvikler",
	summary: "Masterstudent i informatikk og gruppelærer ved Universitetet i Oslo. Jeg bygger fullstack web- og mobilapper med React, Next.js, Nest.js og Kotlin — komfortabel på frontend, backend og infrastruktur.",
	references: "Referanser oppgis ved forespørsel.",
	projectsNote: "github.com/mariusfredrichsen",
	h: {
		contact: "Kontakt",
		skills: "Ferdigheter",
		languages: "Språk",
		general: "Generelt",
		experience: "Erfaring",
		education: "Utdanning",
		projects: "Prosjekter",
		volunteer: "Verv & frivillighet",
	},
	contact: [
		{ label: "Sted", value: "Oslo, Norge" },
		{ label: "Telefon", value: "+47 941 41 698" },
		{ label: "E-post", value: "mariusfredrichsen@gmail.com" },
		{ label: "GitHub", value: "github.com/mariusfredrichsen" },
		{ label: "Nettside", value: "maef.no" },
		{ label: "Født", value: "15. aug. 2002" },
	],
	skills: [
		{
			label: "Språk & rammeverk",
			items: [
				"Python",
				"Java",
				"Kotlin",
				"C++",
				"React",
				"Next.js",
				"Nest.js",
				"PostgreSQL",
				"Docker",
				"Scheme",
			],
		},
		{
			label: "Verktøy",
			items: [
				"Git & GitHub",
				"VSCode",
				"Cursor",
				"Claude",
				"Android Studio",
				"Figma",
				"Fusion 360",
				"MongoDB",
			],
		},
	],
	languages: [
		{ name: "Norsk", level: "Morsmål" },
		{ name: "Engelsk", level: "Meget god" },
	],
	general: ["Jobber godt selvstendig og i team", "Førerkort klasse B"],
	experience: [
		{
			role: "Utviklerintern",
			org: "Netcompany",
			period: "Jun – Jul 2026",
			desc: "Jobbet i et agilt team på en reell kundecase — skalerte en produksjonsdatabase, modellerte domenet i C# med Entity Framework Core, og integrerte AI-drevne funksjoner.",
			courses: [],
		},
		{
			role: "Gruppelærer & retter",
			org: "Universitetet i Oslo",
			period: "Aug 2023 – Nå",
			desc: "Holder gruppetimer og retter innleveringer i fire sentrale informatikkemner:",
			courses: [
				"IN5320 — Development in Platform Ecosystems",
				"IN2000 — Software Engineering med prosjektarbeid",
				"IN2010 — Algoritmer og datastrukturer",
				"IN1010 — Objektorientert programmering",
				"IN1000 — Introduksjon til objektorientert programmering",
			],
		},
		{
			role: "Programmeringslærer",
			org: "Sommerskolen Oslo · YoungCoderz",
			period: "Jun – Jul 2024",
			desc: "Holdt grunnleggende programmeringskurs (Scratch og Python) for 5.- og 6.-klassinger.",
			courses: [],
		},
	],
	projects: [
		{
			name: "maef.no — Personlig nettside",
			tech: ["React", "JavaScript", "Nginx"],
			details: "En personlig nettside bygget med React og Vite som samler CV, GitHub og annet arbeid på ett sted. Den bruker klient-side-ruting og inkluderer en visning for løping med kart, samtidig som den fungerer som et pågående prosjekt for å utforske nye webfunksjoner.",
			desc: "Personlig nettside bygget med React og Vite, med CV, prosjekter og egne eksperimenter.",
		},
		{
			name: "Bokskap-system — FUI",
			tech: ["React", "Django", "Node", "Tailwind CSS"],
			details: "Et agilt gruppeprosjekt utviklet sammen med fem andre studenter for å digitalisere administrasjonen av bokskapene ved Institutt for informatikk. Systemet ble utviklet for å gjøre administrasjon og drift av bokskapene enklere.",
			desc: "Agilt gruppeprosjekt for å digitalisere og administrere bokskapene ved Institutt for informatikk.",
		},
		{
			name: "BåtBuddy",
			tech: ["Kotlin", "Android", "SQL", "Figma"],
			details: "En Android-app utviklet av et team på seks studenter i IN2000 for å hjelpe båtførere i Norge med å planlegge dagsturer. Brukere kan lage ruter, se vær langs ruten og lagre ruter lokalt. Appen kombinerer Mapbox, værdata fra Meteorologisk institutt, Room, Hilt og coroutines.",
			desc: "Gruppeprosjekt i IN2000: en Android-app for planlegging av båtturer med kart, ruting og værdata.",
		},
		{
			name: "Discord-bot",
			tech: ["Python", "MongoDB"],
			core: false,
			details: "Et fritidsprosjekt som samler flere Discord-verktøy i én bot. Den inkluderer visualiseringer av sorteringsalgoritmer, et Kattis-scoreboard, et incremental game under utvikling og andre Discord-relaterte funksjoner.",
			desc: "En Python-basert Discord-bot med algoritmevisualiseringer, Kattis-scoreboard og andre verktøy.",
		},
		{
			name: "Tangent Trim",
			tech: ["Arduino (C++)", "GitHub", "Fusion 360"],
			core: false,
			details: "Et bruksorientert designprosjekt i IN1060 utviklet i samarbeid med beboere og ansatte ved et eldrehjem i Oslo. Vi gjennomførte intervjuer og observasjoner, analyserte brukerbehov og utviklet fysiske prototyper iterativt. Den endelige Tangent Trim-prototypen er en pianoinspirert Arduino/C++-løsning som bruker kjent musikk for å motivere eldre til fysisk aktivitet.",
			desc: "Bruksorientert designprosjekt i IN1060: en Arduino/C++-drevet, pianoinspirert løsning utviklet for å motivere eldre gjennom musikk og interaksjon.",
		},
	],
	education: [
		{
			role: "Master i informatikk — Programmering og systemarkitektur",
			org: "Universitetet i Oslo",
			period: "Aug 2025 – Jun 2027",
		},
		{
			role: "Fritt sammensatt bachelor i informatikk",
			org: "Universitetet i Oslo",
			period: "Aug 2022 – Jun 2025",
		},
		{
			role: "Studiespesialiserende med forskerlinje",
			org: "Videregående skole i Drammen",
			period: "Aug 2018 – Jun 2021",
			core: false,
		},
	],
	volunteer: [
		{
			role: "Nestleder",
			org: "VIFI — Volleyball IFI",
			period: "Jan – Jun 2026",
		},
		{
			role: "Styremedlem",
			org: "Defi — Linjeforening for informatikk",
			period: "Jan – Jun 2025",
		},
		{
			role: "Medlem",
			org: "Defi — Linjeforening for informatikk",
			period: "Aug 2024 – Des 2025",
			core: false,
		},
		{
			role: "Intern",
			org: "Cybernetisk Selskab — Studentbaren Escape",
			period: "Feb – Jun 2024",
			core: false,
		},
	],
};

export const content: Record<Lang, CVContent> = { en, no };

// `core: false` items are hidden in the concise one-pager.
export function filterByVariant<T extends { core?: boolean }>(
	items: T[],
	variant: Variant,
): T[] {
	return variant === "full"
		? items
		: items.filter((it) => it.core !== false);
}
