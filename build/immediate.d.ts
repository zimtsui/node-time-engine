import { TimeEngineLike } from '@zimtsui/time-engine-like';
export declare class Immediate implements TimeEngineLike.TimeoutLike {
    private nodeImmediate;
    constructor(cb: () => void);
    /**
     * @sealed
     * @decorator `@boundMethod`
     */
    clear(): void;
}
