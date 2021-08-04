"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearTimeout = exports.setTimeout = void 0;
const setTimeout = (cb, ms) => {
    return ms ? {
        type: 'GlobalTimeout',
        timeout: globalThis.setTimeout(cb, ms),
    } : {
        type: 'GlobalImmediate',
        immediate: globalThis.setImmediate(cb),
    };
};
exports.setTimeout = setTimeout;
const clearTimeout = id => {
    if (id.type === 'GlobalImmediate')
        clearImmediate(id.immediate);
    else
        globalThis.clearTimeout(id.timeout);
};
exports.clearTimeout = clearTimeout;
//# sourceMappingURL=timeout.js.map