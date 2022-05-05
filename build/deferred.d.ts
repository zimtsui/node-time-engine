import { TimeoutLike } from 'cancellable/build/time-engine-like';
export declare class Deferred implements TimeoutLike {
    private nodeTimeout;
    constructor(cb: () => void, ms: number);
    clear(): void;
}
