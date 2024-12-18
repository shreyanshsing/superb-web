const useDebounce = (callback: Function, delay: number) => {
    let timer: any;

    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};

export default useDebounce;