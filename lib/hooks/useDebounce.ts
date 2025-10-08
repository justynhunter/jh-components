import React, { useCallback, useRef } from "react";

/**
* useDebounce()
*
* debounces the given function
*/
export function useDebounce<T extends (...args: Parameters<T>) => void>(
    fn: T,
    delayInMs = 400,
    callbackDeps: React.DependencyList = [],
) {
    const timeoutRef = useRef<NodeJS.Timeout>(null);

    const debouncer = function(this: ThisParameterType<T>, ...args: Parameters<T>) {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        timeoutRef.current = setTimeout(() => {
            timeoutRef.current = null;
            fn.apply(context, args);
        }, delayInMs);
    };

    return useCallback(debouncer, callbackDeps);
}
