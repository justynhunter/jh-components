import React, { useCallback } from "react";

export function useDebounce<T extends (...args: Parameters<T>) => void>(
    fn: T,
    delayInMs = 400,
    callbackDeps: React.DependencyList = [],
) {
    let timeout: NodeJS.Timeout | null;

    const debouncer = function(this: ThisParameterType<T>, ...args: Parameters<T>) {
        if (timeout) {
            clearTimeout(timeout);
        }

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        timeout = setTimeout(() => {
            timeout = null;
            fn.apply(context, args);
        }, delayInMs);
    };

    return useCallback(debouncer, callbackDeps);
}
