import {
	TimeoutLike,
	Callback,
} from 'cancellable';


export class Deferred implements TimeoutLike {
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
