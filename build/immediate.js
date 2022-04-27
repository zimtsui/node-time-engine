"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Immediate = void 0;
class Immediate {
    constructor(cb) {
        this.nodeImmediate = globalThis.setImmediate(cb);
    }
    clear() {
        globalThis.clearImmediate(this.nodeImmediate);
    }
}
exports.Immediate = Immediate;
//# sourceMappingURL=immediate.js.map