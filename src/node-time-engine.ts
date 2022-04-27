import {
    TimeoutLike,
    Callback,
    TimeEngineLike,
} from 'cancellable';
import { Deferred } from './deferred';
import { Immediate } from './immediate';
import { Perpetual } from './perpetual';



export class NodeTimeEngine implements TimeEngineLike {
    public setTimeout(cb: Callback, ms: number): TimeoutLike {
        if (ms === 0)
            return new Immediate(cb);
        if (ms === Number.POSITIVE_INFINITY)
            return new Perpetual();
        return new Deferred(
            cb,
            ms,
        );
    }
}
