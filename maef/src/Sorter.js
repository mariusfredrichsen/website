import React, { useState, useEffect, useRef } from 'react';

function Sorter({children}) {
    const [numbers, setNumbers] = useState([]); 
    const [isFull, setIsFull] = useState(false);
    const [isSorted, setIsSorted] = useState(false);
    const divRef = useRef(null);

    useEffect(() => {
        if (divRef.current && !isFull) {
            const isOverflowing = divRef.current.scrollHeight > divRef.current.clientHeight;
            setIsFull(isOverflowing);
            if (isOverflowing) setNumbers(numbers.slice(0, -1));
        }
    }, [isFull, numbers]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isFull && divRef.current) {
                setNumbers(prevNumbers => {
                    const rnum = Math.floor(Math.random() * 90) + 10;
                    return [...prevNumbers, rnum];
                });
            }
        }, 10);

        return () => clearInterval(intervalId);
    }, [isFull]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isSorted && isFull) {
                let swapped = false;
                const numbersCopy = [...numbers];
                for (let i = 0; i < numbersCopy.length-1; i++) {
                    if (numbersCopy[i] > numbersCopy[i+1]) {
                        [numbersCopy[i], numbersCopy[i+1]] = [numbersCopy[i+1], numbersCopy[i]]
                        swapped = true;
                    }
                }
                setNumbers(numbersCopy)
                setIsSorted(!swapped)
            }
        }, 50);

        return () => clearInterval(intervalId);
    }, [isSorted, numbers, isFull])

    useEffect(() => {
        if (isSorted) {
            setNumbers([])
            setIsFull(false)
            setIsSorted(false)
        }
    }, [isSorted])

    

    return (
        <div className='wrapper'>
            <div className='sorter' ref={divRef}>
                {numbers.join(' ')}
            </div>
            {children}
        </div>
    );
};

export default Sorter;
