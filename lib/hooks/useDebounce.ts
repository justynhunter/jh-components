import React, { useCallback, useRef } from "react";

/**
* useDebounce()
*
* debounces the given function
*
* ## Example
* ```tsx
* function MyComponent() {
*   const search = useDebounce((searchTerm: string) => doSearch(searchTerm), 500);
*
*   return (
*       <form>
*           <input onChange={(event) => search(event.target.value)} />
*           <button type="submit" />
*       </form>
*   )
* }
* ```
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useCallback(debouncer, callbackDeps);
}
