import { useState, useEffect } from 'react';

const useCounter = (positiveCount = true, steps = 1) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (positiveCount) {
                setCounter((prevCounter) => prevCounter + steps);
            } else {
                setCounter((prevCounter) => prevCounter - steps);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [positiveCount, steps]);
    return counter;
};
export default useCounter;
