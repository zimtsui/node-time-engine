"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deferred = void 0;
class Deferred {
    constructor(cb, ms) {
        this.nodeTimeout = setTimeout(cb, ms);
    }
    clear() {
        clearTimeout(this.nodeTimeout);
    }
}
exports.Deferred = Deferred;
//# sourceMappingURL=deferred.js.map