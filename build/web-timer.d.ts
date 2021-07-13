/// <reference types="node" />
declare type GlobalTimeout = ReturnType<typeof globalThis.setTimeout>;
declare type GlobalImmediate = ReturnType<typeof globalThis.setImmediate>;
export declare type TimerId = GlobalTimeout | GlobalImmediate;
export declare function setTimeout(cb: () => void, ms: number): TimerId;
export declare function clearTimeout(id: TimerId): void;
export {};
