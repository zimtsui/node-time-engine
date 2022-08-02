import { TimeoutLike, TimeEngineLike } from 'time-engine-like';
export declare class NodeTimeEngine extends TimeEngineLike {
    setTimeout(cb: () => void, ms: number): TimeoutLike;
    now(): number;
}
