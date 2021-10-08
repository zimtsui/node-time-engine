/// <reference types="node" />
declare type GlobalTimeout = ReturnType<typeof globalThis.setTimeout>;
declare type GlobalImmediate = ReturnType<typeof globalThis.setImmediate>;
export declare type TimeoutId = {
    type: 'GlobalTimeout';
    timeout: GlobalTimeout;
} | {
    type: 'GlobalImmediate';
    immediate: GlobalImmediate;
} | {
    type: 'null';
};
interface SetTimeout<TimeoutId> {
    (cb: () => void, ms: number): TimeoutId;
}
interface ClearTimeout<TimeoutId> {
    (id: TimeoutId): void;
}
export declare const setTimeout: SetTimeout<TimeoutId>;
export declare const clearTimeout: ClearTimeout<TimeoutId>;
export {};
