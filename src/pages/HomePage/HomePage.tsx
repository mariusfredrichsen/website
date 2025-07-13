import '../../index.css';
import { useState } from 'react';
import hoverLinksJson from '../../assets/hover_links.json'

type HoverLinkProps = {
    content: string;
    link: string;
    target: string;
}

function HomePage() {

    const hoverLinks: HoverLinkProps[] = hoverLinksJson

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
                className="text-white"
                href={link}
                target={target}
                rel="noreferrer"
                onMouseEnter={() => { setHovered(true) }}
                onMouseLeave={() => { setHovered(false) }}
            >{hovered ? `>${content}<` : `> ${content} <`}</a>
        )
    }

    return (
        <div className="flex w-screen h-screen justify-center items-center">
            <div className="p-4 border bg-gray-700">
                <HoverLinkList />
            </div>
        </div>
    )
}

export default HomePage;