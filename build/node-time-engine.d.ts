import { TimeoutLike, Callback, TimeEngineLike } from 'cancellable';
export declare class NodeTimeEngine implements TimeEngineLike {
    setTimeout(cb: Callback, ms: number): TimeoutLike;
}
