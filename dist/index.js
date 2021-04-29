const Immediate = globalThis.setImmediate(() => { }).constructor;
export function setTimeout(cb, ms) {
    return ms ? globalThis.setTimeout(cb, ms) : globalThis.setImmediate(cb);
}
export function clearTimeout(id) {
    if (id instanceof Immediate)
        clearImmediate(id);
    else
        globalThis.clearTimeout(id);
}
//# sourceMappingURL=index.js.map