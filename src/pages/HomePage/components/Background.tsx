import { useEffect, useState, useRef } from "react";




function Background({ sortType }: { sortType: string }) {
    const [numbers, setNumbers] = useState([42]);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isSorted, setIsSorted] = useState(false);
    const [i, setI] = useState(0)
    const divRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const randomNum = Math.floor(Math.random() * 90 + 10);
        if (divRef.current && !isOverflowing) {
            const el = divRef.current;
            if (el.scrollHeight > el.clientHeight) {
                setIsOverflowing(true);
                setNumbers(prevNumbers => prevNumbers.slice(0, -1));

            } else {
                setTimeout(() => {
                    setNumbers(prevNumbers => [...prevNumbers, randomNum]);
                }, 10);
            }
        } else if (divRef.current && isOverflowing) {
            switch (sortType) {
                case "bubble":
                    if (!isSorted) {
                        setTimeout(() => {
                            let swapped = false;
                            const numbersCopy = [...numbers];
                            for (let i = 0; i < numbersCopy.length - 1; i++) {
                                if (numbersCopy[i] > numbersCopy[i + 1]) {
                                    [numbersCopy[i], numbersCopy[i + 1]] = [numbersCopy[i + 1], numbersCopy[i]]
                                    swapped = true;
                                }
                            }

                            setNumbers(numbersCopy);
                            setIsSorted(!swapped)
                        }, 50)
                    }
                    break;
                case "select":
                    if (!isSorted) {
                        setTimeout(() => {
                            const numbersCopy = [...numbers];
                            const n = numbersCopy.length;
                            let k = i;
                            for (let j = i; j < n; j++) {
                                if (numbersCopy[k] > numbersCopy[j]) {
                                    k = j;
                                }
                            }
                            if (k != i) {
                                [numbersCopy[i], numbersCopy[k]] = [numbersCopy[k], numbersCopy[i]]
                                setNumbers(numbersCopy)
                            }
                            if (i != n) {
                                setI(i + 1)
                            } else {
                                setIsSorted(true)
                            }

                        }, 50)
                    }
                    break;
                case "insert":
                    if (!isSorted) {
                        setTimeout(() => {
                            const numbersCopy = [...numbers];
                            const n = numbersCopy.length;
                            let currentI = i;
                            if (currentI < n) {
                                let currentJ = currentI;
                                while (currentJ > 0 && numbersCopy[currentJ] < numbersCopy[currentJ - 1]) {
                                    [numbersCopy[currentJ], numbersCopy[currentJ - 1]] = [numbersCopy[currentJ - 1], numbersCopy[currentJ]];
                                    currentJ--;
                                }
                                setNumbers(numbersCopy);
                                setI(currentI + 1);
                            } else {
                                setIsSorted(true);
                            }
                        }, 50);
                    }
                    break;
                default:
                    break;
            }
        }
    }, [numbers, i]);

    return (
        <div
            ref={divRef}
            className="absolute inset-0 w-screen h-screen overflow-x-clip font-mono text-orange-500/50 text-center flex items-center justify-center select-none pointer-events-none text-[clamp(1.5rem,4vw,2.5rem)]"
        >
            {numbers.map((num) => {
                const numString = num.toString();
                return (
                    numString.length === 2 ? numString + " " : numString + "  "
                );
            })}
        </div>
    );
}

export default Background;