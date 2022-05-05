import { TimeoutLike } from 'cancellable/build/time-engine-like';
export declare class Immediate implements TimeoutLike {
    private nodeImmediate;
    constructor(cb: () => void);
    clear(): void;
}
