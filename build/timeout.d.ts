import { TimeoutLike, TimeEngineLike, CheckPoint } from 'cancellable';
export declare class TimeEngine implements TimeEngineLike {
    setTimeout(checkPoint: CheckPoint): TimeoutLike;
}
