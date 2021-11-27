export type TimeoutId = {
    type: 'NodeJS.Timeout';
    value: NodeJS.Timeout;
} | {
    type: 'NodeJS.Immediate';
    value: NodeJS.Immediate;
} | {
    type: 'null';
    value: null;
};

export function setTimeout(cb: () => void, ms: number): TimeoutId {
    if (ms === 0) return {
        type: 'NodeJS.Immediate',
        value: globalThis.setImmediate(cb),
    };
    if (ms === Number.POSITIVE_INFINITY) return {
        type: 'null',
        value: null,
    };
    return {
        type: 'NodeJS.Timeout',
        value: globalThis.setTimeout(cb, ms),
    };
}

export function clearTimeout(id: TimeoutId): void {
    if (id.type === 'NodeJS.Immediate')
        globalThis.clearImmediate(id.value);
    else if (id.type === 'NodeJS.Timeout')
        globalThis.clearTimeout(id.value);
}
