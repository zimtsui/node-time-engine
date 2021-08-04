type GlobalTimeout = ReturnType<typeof globalThis.setTimeout>;
type GlobalImmediate = ReturnType<typeof globalThis.setImmediate>;
export type TimeoutId = {
    type: 'GlobalTimeout';
    timeout: GlobalTimeout;
} | {
    type: 'GlobalImmediate';
    immediate: GlobalImmediate;
};

export interface SetTimeout<TimeoutId> {
    (cb: () => void, ms: number): TimeoutId;
}
export interface ClearTimeout<TimeoutId> {
    (id: TimeoutId): void;
}

export const setTimeout: SetTimeout<TimeoutId> = (cb, ms) => {
    return ms ? {
        type: 'GlobalTimeout',
        timeout: globalThis.setTimeout(cb, ms),
    } : {
        type: 'GlobalImmediate',
        immediate: globalThis.setImmediate(cb),
    };
}

export const clearTimeout: ClearTimeout<TimeoutId> = id => {
    if (id.type === 'GlobalImmediate')
        clearImmediate(id.immediate);
    else
        globalThis.clearTimeout(id.timeout);
}
