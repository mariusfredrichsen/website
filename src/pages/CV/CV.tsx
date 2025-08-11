import cvContentJson from '../../assets/cv_content.json';
import "./CV.css"

type CVContent = {
    experience: Experience[];
    education: Education[];
    projects: Project[];
    other: Other[],
    referances: Referance[];
};


type Experience = {
    title: string;
    date_from: string;
    date_to: string;
    description: DescriptionItem[];
}

type DescriptionItem = (List | Text | Link)

type List = {
    type: "list";
    content: DescriptionItem[][];
};

type Text = {
    type: "text";
    content: string;
};

type Link = {
    type: "link";
    content: string;
    href: string;
};


type Education = {
    educational_institution: string;
    title_of_education: string;
    date_from: string;
    date_to: string;
    semesters: Semester[];
}

type Semester = {
    number: string;
    courses: DescriptionItem[];
}


type Project = {
    title: string;
    technologies: Technology[];
    description: DescriptionItem[];
}

type Technology = {
    name: string;
}


type Other = {
    title: string;
    description: string;
}


type Referance = {
    title: string;
}



function parseDescription(description: DescriptionItem[]) {
    return description.map((it1, index1) => {
        switch (it1.type) {
            case "list":
                return (
                    <ul key={index1}>
                        {it1.content.map((it2, index2) => {
                            return <li key={index2}>{parseDescription(it2)}</li>
                        })}
                    </ul>
                )
            case "text":
                return <span key={index1}>{it1.content}</span>
            case "link":
                return <a key={index1} href={it1.href}>{it1.content}</a>;
            default:
                return <></>;
        }
    })
}

function CV() {
    const cvContent = cvContentJson as CVContent;

    return (
        <div className="items-center pt-32 gap-8 p-4">
            <header className="flex flex-col items-center w-[min(90vw,600px)] mx-auto">
                <h1 className="mb-16 text-center ">Marius Fredrichsen</h1>
                <div className="mb-16 text-left">
                    <p>Adresse: Oslo (mer detaljer oppgis ved forespørsel)</p>
                    <p>Telefon: <a href="tel:+4794141698">+47 941 41 698</a></p>
                    <p>Epost: <a href="mailto:mariusfredrichsen@gmail.com">mariusfredrichsen@gmail.com</a></p>
                    <p>Født: 15.08.2002</p>
                </div>
            </header>


            <div className="container-layout">

                <div className="card-1 projects">
                    <header>
                        <h2>Prosjekter</h2>
                    </header>
                    <hr />
                    <div className="projects-layout">
                        <div className="projects-list">
                            {
                                cvContent.projects.map((it1, index) => {
                                    return (
                                        <div key={index} className="project">
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
                        <div className="technologies">
                            <h4>Teknologier</h4>
                            <ul className="technologies-list">
                                {
                                    Array.from(
                                        new Set(
                                            cvContent.projects.flatMap((it) => it.technologies.map((tech) => tech.name))
                                        )
                                    ).map((it) => <li>{it}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card-1 experience">
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

                <div className="card-1 education">
                    <header>
                        <h2>Utdanning</h2>
                    </header>
                    <hr />
                    <div className="flex flex-col gap-8">
                        {
                            cvContent.education.map((it1, index1) => {
                                return (
                                    <div key={index1} className="flex flex-col divide-gray-500">
                                        <header>
                                            <h4><strong>{it1.title_of_education}</strong></h4>
                                            <p className="date">{it1.date_from} - {it1.date_to}</p>
                                            <p>{it1.educational_institution}</p>
                                        </header>
                                        {
                                            it1.semesters.map((it2, index2) => {
                                                return (
                                                    <>
                                                        <hr className="my-4" />
                                                        <div key={index2}>
                                                            <div>
                                                                <header>
                                                                    <h5>{it2.number}. Semester {(index1 === 0 && index2 === 0) ? "(while true):" : ""}</h5>
                                                                </header>
                                                                {parseDescription(it2.courses)}
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="card-1 other">
                    <header>
                        <h2>Annet</h2>
                    </header>
                    <hr />
                    <div className="flex flex-col">
                        {
                            cvContent.other.map((it1, index) => {
                                return (
                                    <p key={index}>{it1.title} - {it1.description}</p>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="card-1 references">
                    <header>
                        <h2>Referanser</h2>
                    </header>
                    <hr />
                    <div className="flex flex-col">
                        <p>{cvContent.referances[0].title}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CV;