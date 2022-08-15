"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Immediate = void 0;
const autobind_decorator_1 = require("autobind-decorator");
class Immediate {
    constructor(cb) {
        this.nodeImmediate = setImmediate(cb);
    }
    /**
     * @sealed
     * @decorator boundMethod
     */
    clear() {
        clearImmediate(this.nodeImmediate);
    }
}
__decorate([
    autobind_decorator_1.boundMethod
], Immediate.prototype, "clear", null);
exports.Immediate = Immediate;
//# sourceMappingURL=immediate.js.map