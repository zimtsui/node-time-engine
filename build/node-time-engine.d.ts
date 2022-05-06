import { TimeoutLike, TimeEngineLike } from 'time-engine-like';
export declare class NodeTimeEngine implements TimeEngineLike {
    setTimeout(cb: () => void, ms: number): TimeoutLike;
    now(): number;
}
