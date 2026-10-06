import { content } from "../CV/cv_content";
import type { Lang, Project } from "../CV/cv_content";

export type Kind = "web" | "mobile" | "bot" | "hardware";
export type Context = "personal" | "course" | "team";
export type Status = "ongoing" | "wip" | "finished";
export type AiUse = "none" | "assisted" | "generated";

type Bilingual = { en: string; no: string };

export type ProjectMeta = {
	kind: Kind;
	context: Context;
	course?: string; // "IN2000"
	status: Status;
	ai?: AiUse;
	aiNote?: Bilingual;
	team?: number;
	role?: Bilingual;
	period?: Bilingual;
	links?: { label: Bilingual; url: string }[];
	images?: string[];
	sections?: { title: Bilingual; body: Bilingual }[];
	extraTags?: string[];
};

// Keyed by `slug` in cv_content.ts. Only facts already stated in the CV are
// filled in; everything else is left undefined until you add it.
export const projectMeta: Record<string, ProjectMeta> = {
	"maef-no": {
		kind: "web",
		context: "personal",
		status: "ongoing",
		team: 1,
		role: { en: "Solo developer (hobby project)", no: "Alene som utvikler (hobbyprosjekt)" },
		period: { en: "2023 – present", no: "2023 – nå" },
		ai: "generated",
		aiNote: {
			en: "I started the site without AI. AI later began assisting me, and today most of the code is AI-generated.",
			no: "Jeg startet nettsiden uten AI. Etter hvert begynte AI å assistere meg, og i dag er det meste av koden generert av AI.",
		},
		links: [{ label: { en: "GitHub", no: "GitHub" }, url: "https://github.com/mariusfredrichsen/website" }],
		sections: [
			{
				title: { en: "How it grew", no: "Hvordan det vokste" },
				body: {
					en: "This is a hobby project, and the one where I learned React. Over time I moved towards cleaner code and let AI assist me, to the point where AI now generates most of it.",
					no: "Dette er et hobbyprosjekt, og prosjektet der jeg lærte React. Etter hvert gikk jeg over til å skrive renere kode og la AI assistere meg, til det punktet der AI nå genererer det meste.",
				},
			},
		],
		// TODO: images (screenshots)
	},
	"book-locker": {
		kind: "web",
		context: "team",
		// The CV says "with five other students", so six in total.
		team: 6,
		status: "finished",
		role: { en: "Student developer building a website for real use", no: "Student og utvikler som bygget en nettside for reell bruk" },
		period: { en: "2024", no: "2024" },
		ai: "none",
		sections: [
			{
				title: { en: "About the project", no: "Om prosjektet" },
				body: {
					en: "A project for FUI, the student committee at the Department of Informatics, connected to Vipps. The team went through a phase of coming up with ideas, a phase of executing them and a phase of trying to finish. It was a multi-talented team of UX designers and developers.",
					no: "Et prosjekt for FUI, fagutvalget ved Institutt for informatikk, koblet til Vipps. Teamet gikk gjennom en fase med å komme opp med ideer, en fase med gjennomføring og en fase med å prøve å bli ferdige. Det var et allsidig team av UX-designere og utviklere.",
				},
			},
		],
		// TODO: links (repo, report, live system), images (screenshots)
	},
	batbuddy: {
		kind: "mobile",
		context: "course",
		course: "IN2000",
		team: 6,
		status: "finished",
		role: { en: "Developer, UX designer and team lead (roles were rotated to learn)", no: "Utvikler, UX-designer og teamleder (rollene ble rotert for å lære)" },
		period: { en: "Spring 2024", no: "Vår 2024" },
		ai: "assisted",
		// Named in the CV details.
		extraTags: ["Mapbox", "Room", "Hilt"],
		links: [{ label: { en: "GitHub", no: "GitHub" }, url: "https://github.com/BaatBuddy/BaatBuddy" }],
		// TODO: images (app screenshots)
	},
	"discord-bot": {
		kind: "bot",
		context: "personal",
		status: "wip",
		team: 1,
		role: { en: "Solo developer (hobby project)", no: "Alene som utvikler (hobbyprosjekt)" },
		period: { en: "2021 – 2023, on and off", no: "2021 – 2023, av og til" },
		ai: "none",
		// TODO: links, images
	},
	"tangent-trim": {
		kind: "hardware",
		context: "course",
		course: "IN1060",
		team: 5,
		status: "finished",
		role: { en: "UX designer; built the prototype (Arduino and 3D printing)", no: "UX-designer; bygde prototypen (Arduino og 3D-printing)" },
		period: { en: "Spring 2023", no: "Vår 2023" },
		ai: "none",
		links: [
			{ label: { en: "Project page", no: "Prosjektside" }, url: "https://www.uio.no/studier/emner/matnat/ifi/IN1060/v23/prosjekter-var-2023/designerne.ino/" },
			{ label: { en: "GitHub", no: "GitHub" }, url: "https://github.com/KnutHoltet/DESIGNERNE.INO" },
		],
		sections: [
			{
				title: { en: "Goal and concept", no: "Mål og konsept" },
				body: {
					en: "The prototype should motivate older people to get into slightly better physical shape. The target group was residents of a nursing home in Oslo, aged seventy to ninety, and the question was \"how do we motivate older people to move?\"\n\nThe vision was more active users, the concept was music, and the form was a piano: a device that plays popular and classic music so that users get up from their chair or bed and use it in the common areas or the hallway.",
					no: "Prototypen skulle motivere eldre til å komme seg i litt bedre fysisk form. Målgruppen var beboere ved et eldrehjem i Oslo, i alderen sytti til nitti år, og problemstillingen var «hvordan motivere eldre til fysisk bevegelse?»\n\nVisjonen var mer aktive brukere, konseptet var musikk og formen var et piano: en løsning som spiller populær og klassisk musikk slik at brukerne reiser seg fra stolen eller sengen og bruker den i fellesområdene eller gangen.",
				},
			},
			{
				title: { en: "Understanding users", no: "Forstå brukerne" },
				body: {
					en: "We started by collecting data on older people, their technology use and everyday life: a domain expert, earlier studies and a documentary. An interview with a home nurse was analysed with thematic analysis, and showed lack of motivation and age-related problems as causes of inactivity.\n\nThe main interviews were semi-structured, held in the residents' rooms and lasted 20–30 minutes. We also observed physical exercises, interviewed staff including a physiotherapist and the manager, and visited Almas hus to learn about age-friendly technology. The focus shifted to the nursing home residents.",
					no: "Vi startet med å samle data om eldre, teknologibruk og hverdagsliv: en domeneekspert, tidligere studier og en dokumentar. Et intervju med en hjemmesykepleier ble analysert med tematisk analyse, og viste mangel på motivasjon og aldersrelaterte problemer som årsaker til inaktivitet.\n\nHovedintervjuene var semistrukturerte, ble holdt på de eldres rom og varte 20–30 minutter. Vi observerte også fysiske øvelser, intervjuet ansatte, blant annet fysioterapeut og daglig leder, og besøkte Almas hus for å lære om eldrevennlig teknologi. Fokuset skiftet til eldrehjemsbeboerne.",
				},
			},
			{
				title: { en: "Designing with users", no: "Design med brukere" },
				body: {
					en: "A scenario workshop produced ten scenarios, and we dropped half. We built low-fidelity physical prototypes, evaluated them with the users and simulated functionality with the \"Wizard of Oz\" method.\n\nThe evaluation showed that socialising was less of a need than assumed, since the nursing home already offered a lot of social activity. Users wanted continuous rewards, did not want to seem vulnerable, and the \"musical heart\" prototype was dropped because of possible overstimulation from noise and music.",
					no: "En scenario-workshop ga ti scenarioer, og vi forkastet halvparten. Vi lagde lavoppløselige fysiske prototyper, evaluerte dem med brukerne og simulerte funksjonalitet med «Wizard of Oz»-metoden.\n\nEvalueringen viste at sosialisering var et mindre behov enn antatt, siden eldrehjemmet allerede la opp til mye sosial aktivitet. Brukerne ønsket belønning underveis, ville ikke fremstå som sårbare, og prototypen «Musikalsk hjerte» ble forkastet på grunn av mulig overstimulering fra støy og musikk.",
				},
			},
			{
				title: { en: "The piano and the sausage", no: "Piano og pølsa" },
				body: {
					en: "Two ideas were prototyped further, called \"piano\" and \"pølsa\" (the sausage). The piano was a form concept of the musical button. The sausage was made from a speaker, a frisbee, duct tape and knitted yarn, for people who like music but cannot walk: they could stay active by shaking it.\n\nThe piano was sketched on paper first and sized after a real piano, with larger keys for usability. In a workshop with two users both prototypes got positive feedback, but the piano stood out. The users were not interested in competing against each other, so the competition element was dropped.",
					no: "To idéer ble prototypet videre, kalt «piano» og «pølsa». Pianoet var et formkonsept av den musikalske knappen. Pølsa ble laget av en høyttaler, en frisbee, gaffateip og strikket garn, for dem som liker musikk men ikke kan gå: de kunne likevel være aktive ved å riste på den.\n\nPianoet ble først skissert på papir og målt opp etter et ekte piano, men med større tangenter for brukervennlighet. I en workshop med to brukere fikk begge prototypene positiv tilbakemelding, men pianoet skilte seg ut. Brukerne var ikke interessert i å konkurrere mot hverandre, så konkurranseelementet ble droppet.",
				},
			},
			{
				title: { en: "Final prototype: Tangent Trim", no: "Endelig prototype: Tangent Trim" },
				body: {
					en: "We developed the piano for both look and feel and implementation, and 3D-modelled and 3D-printed it again. The black keys became fully pressable so nobody would think they were broken. The three keys were kept and each plays music from a different genre, to suit different tastes.\n\nAn evaluation without users showed that a pause button was not possible and that the volume wheel did not work as intended. We still wanted to use the screen, for example to show which key belongs to which genre.",
					no: "Vi utviklet pianoet både for «look and feel» og implementering, og 3D-modellerte og 3D-printet det på nytt. De svarte tangentene ble fullt trykkbare for å unngå misforståelser om at de ikke fungerer. De tre tangentene ble beholdt, og hver spiller musikk fra en ulik sjanger for å treffe ulik musikksmak.\n\nEn evaluering uten brukere viste at en pauseknapp ikke lot seg gjøre og at volumhjulet ikke fungerte som ønsket. Vi ville fortsatt bruke skjermen, for eksempel til å vise hvilken tangent som hører til hvilken sjanger.",
				},
			},
		],
		// TODO: images (photos of the prototype are on the project page)
	},
	lingodingo: {
		kind: "web",
		context: "personal",
		// TODO: status is a guess from the commit history (active Sep–Oct 2026).
		status: "wip",
		team: 1,
		role: { en: "Developer (hobby project)", no: "Utvikler (hobbyprosjekt)" },
		// First commit in the repo is 13 Sep 2026.
		period: { en: "Since Sep 2026", no: "Siden sep. 2026" },
		// Named in the repo README.
		extraTags: ["Drizzle", "Better Auth", "Nginx"],
		ai: "generated",
		// The repo is private, so there is deliberately no GitHub link.
		links: [{ label: { en: "Website", no: "Nettside" }, url: "https://lingodingo.maef.no" }],
		sections: [
			{
				title: { en: "Why I built it", no: "Hvorfor jeg bygde den" },
				body: {
					en: "A hobby project, made mainly for myself to learn Tagalog.",
					no: "Et hobbyprosjekt, laget hovedsakelig for meg selv for å lære tagalog.",
				},
			},
		],
		// TODO: images
	},
};

export type MergedProject = Project & {
	slug: string;
	meta: ProjectMeta;
};

// CV project (name, desc, details, tech) joined with its meta by slug.
// Projects without a slug or meta are left out of the Projects pages.
export function getProjects(lang: Lang): MergedProject[] {
	const merged: MergedProject[] = [];
	for (const project of content[lang].projects) {
		const { slug } = project;
		if (slug && projectMeta[slug]) {
			merged.push({ ...project, slug, meta: projectMeta[slug] });
		}
	}
	return merged;
}

export type Ui = {
	backToSite: string;
	allProjects: string;
	allHeading: string;
	navCv: string;
	navRun: string;
	navProjects: string;
	title: string;
	intro: string;
	projectsCount: string;
	fromCourses: string;
	madeWithAi: string;
	filter: string;
	projectType: string;
	showing: string;
	empty: string;
	all: string;
	kinds: Record<Kind, string>;
	toggleAi: string;
	toggleCourse: string;
	toggleTeam: string;
	togglePersonal: string;
	contexts: Record<Context, string>;
	statuses: Record<Status, string>;
	aiBadge: Record<"assisted" | "generated", string>;
	aiUse: Record<AiUse, string>;
	aiUseLabel: string;
	readMore: string;
	readMoreAria: (name: string) => string;
	solo: string;
	students: (n: number) => string;
	facts: string;
	tech: string;
	type: string;
	context: string;
	team: string;
	role: string;
	period: string;
	status: string;
	links: string;
	overview: string;
	screens: string;
	howAi: string;
	screenshot: (name: string, n: number) => string;
	prevNext: string;
	other: string;
};

export const ui: Record<Lang, Ui> = {
	en: {
		backToSite: "← Back to main site",
		allProjects: "← All projects",
		allHeading: "All projects",
		navCv: "CV",
		navRun: "Run",
		navProjects: "Projects",
		title: "Projects",
		intro: "Things I have built — at university, in teams and in my spare time. Each one is tagged with what kind of project it is, how it was made and where it stands.",
		projectsCount: "projects",
		fromCourses: "from courses",
		madeWithAi: "made with AI",
		filter: "Filter",
		projectType: "Project type",
		showing: "showing",
		empty: "No projects match these filters.",
		all: "All",
		kinds: { web: "Web", mobile: "Mobile", bot: "Bot", hardware: "Hardware" },
		toggleAi: "Made with AI",
		toggleCourse: "Course",
		toggleTeam: "Team",
		togglePersonal: "Personal",
		contexts: { personal: "Personal", course: "Course", team: "Team" },
		statuses: { ongoing: "Ongoing", wip: "WIP", finished: "Finished" },
		aiBadge: { assisted: "AI-assisted", generated: "AI-generated" },
		aiUse: { none: "None", assisted: "Assisted", generated: "Generated" },
		aiUseLabel: "AI use",
		readMore: "Read more →",
		readMoreAria: (name) => `Read more: ${name}`,
		solo: "Solo",
		students: (n) => `${n} students`,
		facts: "Facts",
		tech: "Tech",
		type: "Type",
		context: "Context",
		team: "Team",
		role: "My role",
		period: "Period",
		status: "Status",
		links: "Links",
		overview: "Overview",
		screens: "Screens",
		howAi: "How AI was used",
		screenshot: (name, n) => `${name} screenshot ${n}`,
		prevNext: "More projects",
		other: "Norsk",
	},
	no: {
		backToSite: "← Til hovedsiden",
		allProjects: "← Alle prosjekter",
		allHeading: "Alle prosjekter",
		navCv: "CV",
		navRun: "Løping",
		navProjects: "Prosjekter",
		title: "Prosjekter",
		intro: "Ting jeg har bygget — på universitetet, i team og på fritiden. Hvert prosjekt er merket med hva slags prosjekt det er, hvordan det ble laget og hvor det står.",
		projectsCount: "prosjekter",
		fromCourses: "fra emner",
		madeWithAi: "laget med AI",
		filter: "Filter",
		projectType: "Prosjekttype",
		showing: "viser",
		empty: "Ingen prosjekter passer til disse filtrene.",
		all: "Alle",
		kinds: { web: "Web", mobile: "Mobil", bot: "Bot", hardware: "Maskinvare" },
		toggleAi: "Laget med AI",
		toggleCourse: "Emne",
		toggleTeam: "Team",
		togglePersonal: "Personlig",
		contexts: { personal: "Personlig", course: "Emne", team: "Team" },
		statuses: { ongoing: "Pågår", wip: "Under arbeid", finished: "Ferdig" },
		aiBadge: { assisted: "AI-assistert", generated: "AI-generert" },
		aiUse: { none: "Ingen", assisted: "Assistert", generated: "Generert" },
		aiUseLabel: "AI-bruk",
		readMore: "Les mer →",
		readMoreAria: (name) => `Les mer: ${name}`,
		solo: "Alene",
		students: (n) => `${n} studenter`,
		facts: "Fakta",
		tech: "Teknologi",
		type: "Type",
		context: "Kontekst",
		team: "Team",
		role: "Min rolle",
		period: "Periode",
		status: "Status",
		links: "Lenker",
		overview: "Oversikt",
		screens: "Skjermbilder",
		howAi: "Hvordan AI ble brukt",
		screenshot: (name, n) => `${name} skjermbilde ${n}`,
		prevNext: "Flere prosjekter",
		other: "English",
	},
};

// Shared helpers so the cards, facts list and filters read the meta the same way.

export function contextLabel(t: Ui, meta: ProjectMeta): string {
	return meta.course ? `${t.contexts.course} · ${meta.course}` : t.contexts[meta.context];
}

export function teamLabel(t: Ui, team: number): string {
	return team === 1 ? t.solo : t.students(team);
}

export function isTeam(meta: ProjectMeta): boolean {
	return meta.context === "team" || (meta.team ?? 0) > 1;
}

export function usesAi(meta: ProjectMeta): boolean {
	return meta.ai === "assisted" || meta.ai === "generated";
}
