interface Callback {
    (): void;
}
export interface Timeout {
    clear(): void;
}
export declare function setTimeout(cb: Callback, ms: number): Timeout;
export declare function clearTimeout(timeout: Timeout): void;
export {};
