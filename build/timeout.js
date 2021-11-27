"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearTimeout = exports.setTimeout = void 0;
function setTimeout(cb, ms) {
    if (ms === 0)
        return {
            type: 'NodeJS.Immediate',
            value: globalThis.setImmediate(cb),
        };
    if (ms === Number.POSITIVE_INFINITY)
        return {
            type: 'null',
            value: null,
        };
    return {
        type: 'NodeJS.Timeout',
        value: globalThis.setTimeout(cb, ms),
    };
}
exports.setTimeout = setTimeout;
function clearTimeout(id) {
    if (id.type === 'NodeJS.Immediate')
        globalThis.clearImmediate(id.value);
    else if (id.type === 'NodeJS.Timeout')
        globalThis.clearTimeout(id.value);
}
exports.clearTimeout = clearTimeout;
//# sourceMappingURL=timeout.js.map