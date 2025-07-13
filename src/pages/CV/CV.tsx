import cvContentJson from '../../assets/cv_content.json';
import "./CV.css"

type CVContent = {
    experience: Experience[];
    education: Education[];
    projects: Project[];
};

type Experience = {
    title: string;
    date_from: string;
    date_to: string;
    description: DescriptionItem[];
}

type DescriptionItem = (List | Text | Link)[]

type List = {
    type: "list",
    content: DescriptionItem[]
}

type Text = {
    type: "text";
    content: string;
}

type Link = {
    type: "link";
    content: string;
    href: string;
}

type Education = {
    educational_institution: string;
    title_of_education: string;
    date_from: string;
    date_to: string;
    semesters: Semester[];
}

type Semester = {
    number: string;
    courses: Link[];
}

type Project = {
    title: string;
    technologies: Technology[];
    description: DescriptionItem[];
}

type Technology = {
    name: string;
}



function parseDescription(description: DescriptionItem[]) {
    return description.map((it1, index) => {
        switch (it1.type) {
            case "list":
                return (
                    <ul key={index}>
                        {it1.content.map((it2, index) => {
                            return <li key={index}>{parseDescription(it2)}</li>
                        })}
                    </ul>
                )
            case "text":
                return <span key={index}>{it1.content}</span>
            case "link":
                return <a key={index} href={it1.href}>{it1.content}</a>;
            default:
                return <></>;
        }
    })
}

function CV() {
    const cvContent: CVContent = cvContentJson

    return (
        <div className="flex flex-col items-center p-32 gap-8">
            <header className="flex flex-col items-center">
                <h1 className="mb-16">Marius Fredrichsen</h1>
                <div className="mb-16">
                    <p>Adresse: Oslo (mer detaljer oppgis ved forespørsel)</p>
                    <p>Telefon: <a href="tel:+4794141698">+47 941 41 698</a></p>
                    <p>Epost: <a href="mailto:mariusfredrichsen@gmail.com">mariusfredrichsen@gmail.com</a></p>
                    <p>Født: 15.08.2002</p>
                </div>
            </header>

            <div className="card-1">
                <header>
                    <h2>Erfaringer</h2>
                </header>
                <hr />
                <div className="flex flex-col gap-8">
                    {
                        cvContent.experience.map((it, index) => {
                            return (
                                <div key={index}>
                                    <p><strong>{it.title}</strong></p>
                                    <p className="date">{it.date_from} - {it.date_to}</p>
                                    <div>
                                        {parseDescription(it.description)}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="card-1">
                <header>
                    <h2>Utdanning</h2>
                </header>
                <hr />
                {
                    cvContent.education.map((it, index) => {
                        return (
                            <div key={index}>
                                <header>
                                    <h4><strong>{it.educational_institution}</strong></h4>
                                    <p className="date">{it.date_from} - {it.date_to}</p>
                                    <p>{it.title_of_education}</p>
                                </header>
                            </div>
                        )
                    })
                }
            </div>

            <div className="card-1">
                <header>
                    <h2>Prosjekter</h2>
                </header>
                <hr />
                {
                    cvContent.projects.map((it1, index) => {
                        return (
                            <div key={index}>
                                <header>
                                    <h4><strong>{it1.title}</strong></h4>
                                    <p className="date">Teknologier: {it1.technologies.map((it2) => it2.name).join(", ")}</p>
                                </header>
                                <div>
                                    {parseDescription(it1.description)}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CV;