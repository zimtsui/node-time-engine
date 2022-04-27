import { TimeoutLike, Callback, TimeEngineLike } from 'cancellable';
export declare class TimeEngine implements TimeEngineLike {
    setTimeout(cb: Callback, ms: number): TimeoutLike;
}
