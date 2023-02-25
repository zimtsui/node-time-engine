"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeTimeEngine = void 0;
const time_engine_like_1 = require("@zimtsui/time-engine-like");
const deferred_1 = require("./deferred");
const immediate_1 = require("./immediate");
const perpetual_1 = require("./perpetual");
/**
 * @sealed
 */
class NodeTimeEngine extends time_engine_like_1.TimeEngineLike {
    constructor() {
        super(...arguments);
        this.setTimeout = (cb, ms) => {
            if (ms === 0)
                return new immediate_1.Immediate(cb);
            if (ms === Number.POSITIVE_INFINITY)
                return new perpetual_1.Perpetual();
            return new deferred_1.Deferred(cb, ms);
        };
        this.now = () => Date.now();
    }
}
exports.nodeTimeEngine = new NodeTimeEngine();
//# sourceMappingURL=node-time-engine.js.map