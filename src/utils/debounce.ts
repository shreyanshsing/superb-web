import { useRef, useCallback } from 'react';

const useDebounce = (callback: Function, delay: number) => {
    const timer = useRef<NodeJS.Timeout | null>(null);

    const debouncedFunction = useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay]
    );

    return debouncedFunction;
};

export default useDebounce;