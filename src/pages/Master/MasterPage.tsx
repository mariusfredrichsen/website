import '../../index.css';
import { useCountdown } from '../../hooks/useCountdown'

interface TimeBearkdown {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

function MasterPage() {

    const essayDate: Date = new Date(2026, 5, 1, 12, 0, 0, 0); // 0 indexed month
    const masterDate: Date = new Date(2027, 4, 18, 12, 0, 0, 0); // 0 indexed month

    const essayTime = useCountdown(essayDate);
    const masterTime = useCountdown(masterDate);

    const formatDate = ({ years, months, days, hours, minutes, seconds }: TimeBearkdown) => {
        if ([years, months, days, hours, minutes, seconds].reduce((acc, it) => acc + it, 0) <= 0) return "Tiden er ute!";

        return [
            { value: years, singular: "år", plural: "år" },
            { value: months, singular: "måned", plural: "måneder" },
            { value: days, singular: "dag", plural: "dager" },
            { value: hours, singular: "time", plural: "timer" },
            { value: minutes, singular: "minutt", plural: "minutter" },
            { value: seconds, singular: "sekund", plural: "sekunder" }
        ].filter(it => it.value > 0)
            .map(it => `${it.value} ${it.value === 1 ? it.singular : it.plural}`)
            .join(" ")

    }

    return (
        <div className="flex flex-col min-h-screen w-screen justify-start items-center bg-black py-12 relative">
            <h1 className="mb-48">
                Nedtelling til Masteroppgaven
            </h1>

            <div className="flex flex-col items-center gap-24">
                <div>
                    <h2 className="flex flex-col items-center">
                        Tid igjen til essay:
                    </h2>
                    <h3>{formatDate(essayTime)}</h3>

                </div>
                <div className="flex flex-col items-center">
                    <h2>
                        Tid igjen til master:
                    </h2>
                    <h3>{formatDate(masterTime)}</h3>
                </div>
            </div>
        </div >
    )
}

export default MasterPage;