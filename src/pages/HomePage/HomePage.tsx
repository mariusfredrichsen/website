import '../../index.css';
import { useState } from 'react';
import hoverLinksJson from '../../assets/hover_links.json'
import Background from './components/Background';

type HoverLinkProps = {
    content: string;
    link: string;
    target: string;
}

function HomePage() {
    const hoverLinks: HoverLinkProps[] = hoverLinksJson

    function getCurrentAge() {
        const secondsInAYear = 31556952000;
        const now = new Date();
        const birthDate: Date = new Date(2002, 7, 15);
        return ((now.getTime() - birthDate.getTime()) / secondsInAYear).toFixed(1);
    }

    const HoverLinkList = () => {
        return (
            <div className="flex flex-col gap-4 items-center">
                {
                    hoverLinks.map(element => (
                        <Link
                            key={element.content}
                            content={element.content}
                            link={element.link}
                            target={element.target}
                        />
                    ))
                }
            </div>
        )
    }

    const Link = ({ content, link, target }: HoverLinkProps) => {
        const [hovered, setHovered] = useState(false);

        return (
            <a
                className="text-3xl"
                href={link}
                target={target}
                rel="noreferrer"
                onMouseEnter={() => { setHovered(true) }}
                onMouseLeave={() => { setHovered(false) }}
            >{hovered ? `>${content}<` : `> ${content} <`}</a>
        )
    }



    return (
        <div className="flex w-screen h-screen justify-center items-center relative">
            <div className="p-8 bg-gray-900/95 rounded text-center w-[min(90vw,600px)] mx-auto z-10">
                <header className="flex flex-col gap-4 text-2xl">
                    <h1 className="text-4xl">Velkommen!</h1>
                    <p>Jeg heter Marius Angelo Eullaran Fredrichsen (derfor maef.no) og er en {getCurrentAge()}år gammal student som går 1.året master på Universitet i Oslo</p>
                </header>
                <hr className="my-8" />
                <div className="">
                    <HoverLinkList />
                </div>
            </div>
            <Background />
        </div>
    )
}

export default HomePage;