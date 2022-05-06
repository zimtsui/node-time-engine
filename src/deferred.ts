import { TimeoutLike } from 'time-engine-like';


export class Deferred implements TimeoutLike {
	private nodeTimeout: NodeJS.Timeout;

	public constructor(
		cb: () => void,
		ms: number,
	) {
		this.nodeTimeout = setTimeout(cb, ms);
	}

	public clear() {
		clearTimeout(this.nodeTimeout);
	}
}
