"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeTimeEngine = void 0;
const time_engine_like_1 = require("time-engine-like");
const deferred_1 = require("./deferred");
const immediate_1 = require("./immediate");
const perpetual_1 = require("./perpetual");
const autobind_decorator_1 = require("autobind-decorator");
/**
 * @sealed
 */
class NodeTimeEngine extends time_engine_like_1.TimeEngineLike {
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
__decorate([
    autobind_decorator_1.boundMethod
], NodeTimeEngine.prototype, "setTimeout", null);
exports.nodeTimeEngine = new NodeTimeEngine();
//# sourceMappingURL=node-time-engine.js.map