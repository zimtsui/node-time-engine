import {
    TimeoutLike,
    TimeEngineLike,
} from 'time-engine-like';
import { Deferred } from './deferred';
import { Immediate } from './immediate';
import { Perpetual } from './perpetual';



export class NodeTimeEngine extends TimeEngineLike {
    public setTimeout(
        cb: () => void,
        ms: number,
    ): TimeoutLike {
        if (ms === 0)
            return new Immediate(cb);
        if (ms === Number.POSITIVE_INFINITY)
            return new Perpetual();
        return new Deferred(
            cb,
            ms,
        );
    }

    public now(): number {
        return Date.now();
    }
}
