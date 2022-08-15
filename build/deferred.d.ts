import { TimeoutLike } from 'time-engine-like';
export declare class Deferred implements TimeoutLike {
    private nodeTimeout;
    constructor(cb: () => void, ms: number);
    /**
     * @sealed
     * @decorator `@boundMethod`
     */
    clear(): void;
}
