import { TimeoutLike, Callback } from 'cancellable';
export declare class Deferred implements TimeoutLike {
    private nodeTimeout;
    constructor(cb: Callback, ms: number);
    clear(): void;
}
