interface Callback {
    (): void;
}

export interface Timeout {
    clear(): void;
}

class Deferred implements Timeout {
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

class Immediate implements Timeout {
    private nodeImmediate: NodeJS.Immediate;
    public constructor(cb: Callback) {
        this.nodeImmediate = globalThis.setImmediate(cb);
    }

    public clear() {
        globalThis.clearImmediate(this.nodeImmediate);
    }
}

class Perpetual implements Timeout {
    public constructor() { }
    public clear() { }
}

export function setTimeout(
    cb: Callback,
    ms: number,
): Timeout {
    if (ms === 0) return new Immediate(cb);
    if (ms === Number.POSITIVE_INFINITY) return new Perpetual();
    return new Deferred(cb, ms);
}

export function clearTimeout(timeout: Timeout): void {
    timeout.clear();
}
