import '../../index.css';
import imageData from '../../assets/lart_data.json';

interface LatteArtItem {
    filename: string;
    date: string;
    description: string;
    tags: string[];
}

function groupBy<T, K extends string | number | symbol>(
    items: T[],
    condition: (item: T, index: number) => K
): Record<K, T[]> {
    return items.reduce((result, item, index) => {
        const key = condition(item, index);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {} as Record<K, T[]>);
}

function LattePage() {
    const data = imageData as LatteArtItem[];
    data.sort((a, b) => {
        const [yearA, monthA, dayA] = a.date.split("-").map((item) => Number.parseInt(item));
        const [yearB, monthB, dayB] = b.date.split("-").map((item) => Number.parseInt(item));

        const dateA = new Date(yearA, monthA, dayA);
        const dateB = new Date(yearB, monthB, dayB);

        return dateB.getTime() - dateA.getTime();
    });

    const groupedImages = groupBy(data, (_, index) => index % 3);

    return (
        <div className="flex min-h-screen w-screen justify-center items-start bg-black py-12 relative">
            <div className="p-8 bg-gray-900/95 rounded-xl text-center w-[75vw] mx-auto z-10 border border-gray-800">
                <header className="flex flex-col gap-2">
                    <h1 className="text-5xl font-bold text-white tracking-tight">Kaffe lart!</h1>
                    <p className="text-gray-400 text-2xl">En liten bildesamling av mine latte kunst</p>
                </header>

                <hr className="my-8 border-gray-800" />

                <div className="grid grid-cols-3 gap-4 items-start">
                    {Object.entries(groupedImages).map(([key, columnItems]) => {
                        return (
                            <div key={key} className="flex flex-col gap-4">
                                {columnItems.map((item, i) => (
                                    <div
                                        key={i}
                                        className="group bg-gray-800 border border-gray-700 rounded-lg overflow-hidden text-white transition-all hover:border-gray-500"
                                    >
                                        <div className="bg-gray-700 w-full overflow-hidden">
                                            <img
                                                src={`larts/${item.filename}`}
                                                alt={item.description || "Latte art"}
                                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="p-4 text-left">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                                    {item.date}
                                                </span>
                                            </div>

                                            {item.description && (
                                                <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            )}

                                            <div className="flex flex-wrap gap-1">
                                                {item.tags.map(tag => (
                                                    <span
                                                        key={tag}
                                                        className="text-[9px] bg-white/5 border border-white/10 text-gray-400 px-2 py-0.5 rounded"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default LattePage;