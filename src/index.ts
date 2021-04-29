type GlobalTimeout = ReturnType<typeof globalThis.setTimeout>;
type GlobalImmediate = ReturnType<typeof globalThis.setImmediate>;
export type TimerId = GlobalTimeout | GlobalImmediate;

const Immediate = globalThis.setImmediate(() => { }).constructor;

export function setTimeout(
    cb: () => void,
    ms: number,
): TimerId {
    return ms ? globalThis.setTimeout(cb, ms) : globalThis.setImmediate(cb);
}

export function clearTimeout(id: TimerId) {
    if (id instanceof Immediate) clearImmediate(<GlobalImmediate>id);
    else globalThis.clearTimeout(<GlobalTimeout>id);
}
