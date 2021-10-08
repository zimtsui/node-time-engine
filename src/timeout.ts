type GlobalTimeout = ReturnType<typeof globalThis.setTimeout>;
type GlobalImmediate = ReturnType<typeof globalThis.setImmediate>;
export type TimeoutId = {
    type: 'GlobalTimeout';
    timeout: GlobalTimeout;
} | {
    type: 'GlobalImmediate';
    immediate: GlobalImmediate;
} | {
    type: 'null',
};

interface SetTimeout<TimeoutId> {
    (cb: () => void, ms: number): TimeoutId;
}
interface ClearTimeout<TimeoutId> {
    (id: TimeoutId): void;
}

export const setTimeout: SetTimeout<TimeoutId> = (cb, ms) => {
    if (ms === 0) return {
        type: 'GlobalImmediate',
        immediate: globalThis.setImmediate(cb),
    };
    if (ms === Number.POSITIVE_INFINITY) return {
        type: 'null',
    };
    return {
        type: 'GlobalTimeout',
        timeout: globalThis.setTimeout(cb, ms),
    };
}

export const clearTimeout: ClearTimeout<TimeoutId> = id => {
    if (id.type === 'GlobalImmediate')
        clearImmediate(id.immediate);
    else if (id.type === 'GlobalTimeout')
        globalThis.clearTimeout(id.timeout);
}
