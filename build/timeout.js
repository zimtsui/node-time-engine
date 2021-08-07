"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearTimeout = exports.setTimeout = void 0;
const setTimeout = (cb, ms) => {
    if (ms === 0)
        return {
            type: 'GlobalImmediate',
            immediate: globalThis.setImmediate(cb),
        };
    if (ms === Number.POSITIVE_INFINITY)
        return {
            type: 'null',
        };
    return {
        type: 'GlobalTimeout',
        timeout: globalThis.setTimeout(cb, ms),
    };
};
exports.setTimeout = setTimeout;
const clearTimeout = id => {
    if (id.type === 'GlobalImmediate')
        clearImmediate(id.immediate);
    else if (id.type === 'GlobalTimeout')
        globalThis.clearTimeout(id.timeout);
};
exports.clearTimeout = clearTimeout;
//# sourceMappingURL=timeout.js.map