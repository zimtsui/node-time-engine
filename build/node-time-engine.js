"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeTimeEngine = void 0;
const deferred_1 = require("./deferred");
const immediate_1 = require("./immediate");
const perpetual_1 = require("./perpetual");
class NodeTimeEngine {
    setTimeout(cb, ms) {
        if (ms === 0)
            return new immediate_1.Immediate(cb);
        if (ms === Number.POSITIVE_INFINITY)
            return new perpetual_1.Perpetual();
        return new deferred_1.Deferred(cb, ms);
    }
    now() {
        return Date.now();
    }
}
exports.NodeTimeEngine = NodeTimeEngine;
//# sourceMappingURL=node-time-engine.js.map