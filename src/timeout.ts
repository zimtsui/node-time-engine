import {
    TimeoutLike,
    Callback,
    TimeEngineLike,
    CheckPoint,
} from 'cancellable';


class Deferred implements TimeoutLike {
    private nodeTimeout: NodeJS.Timeout;

    public constructor(
        cb: Callback,
        ms: number,
    ) {
        this.nodeTimeout = globalThis.setTimeout(cb, ms);
    }

    public clear() {
        globalThis.clearTimeout(this.nodeTimeout);
    }
}

class Immediate implements TimeoutLike {
    private nodeImmediate: NodeJS.Immediate;
    public constructor(cb: Callback) {
        this.nodeImmediate = globalThis.setImmediate(cb);
    }

    public clear() {
        globalThis.clearImmediate(this.nodeImmediate);
    }
}

class Perpetual implements TimeoutLike {
    public constructor() { }
    public clear() { }
}

export class TimeEngine implements TimeEngineLike {
    public setTimeout(checkPoint: CheckPoint): TimeoutLike {
        if (checkPoint.time === 0)
            return new Immediate(checkPoint.cb);
        if (checkPoint.time === Number.POSITIVE_INFINITY)
            return new Perpetual();
        return new Deferred(
            checkPoint.cb,
            checkPoint.time,
        );
    }
}
