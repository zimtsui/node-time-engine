import { TimeoutLike } from 'time-engine-like';
export declare class Immediate implements TimeoutLike {
    private nodeImmediate;
    constructor(cb: () => void);
    /**
     * @sealed
     * @decorator boundMethod
     */
    clear(): void;
}
