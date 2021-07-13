"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearTimeout = exports.setTimeout = void 0;
const Immediate = globalThis.setImmediate(() => { }).constructor;
function setTimeout(cb, ms) {
    return ms ? globalThis.setTimeout(cb, ms) : globalThis.setImmediate(cb);
}
exports.setTimeout = setTimeout;
function clearTimeout(id) {
    if (id instanceof Immediate)
        clearImmediate(id);
    else
        globalThis.clearTimeout(id);
}
exports.clearTimeout = clearTimeout;
//# sourceMappingURL=web-timer.js.map