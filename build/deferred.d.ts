import { TimeEngineLike } from '@zimtsui/time-engine-like';
export declare class Deferred implements TimeEngineLike.TimeoutLike {
    private nodeTimeout;
    constructor(cb: () => void, ms: number);
    /**
     * @sealed
     * @decorator `@boundMethod`
     */
    clear(): void;
}
