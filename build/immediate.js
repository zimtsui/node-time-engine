"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Immediate = void 0;
class Immediate {
    constructor(cb) {
        this.nodeImmediate = setImmediate(cb);
    }
    clear() {
        clearImmediate(this.nodeImmediate);
    }
}
exports.Immediate = Immediate;
//# sourceMappingURL=immediate.js.map