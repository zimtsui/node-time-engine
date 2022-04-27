import { TimeoutLike, Callback } from 'cancellable';
export declare class Immediate implements TimeoutLike {
    private nodeImmediate;
    constructor(cb: Callback);
    clear(): void;
}
