import { TimeoutLike } from 'time-engine-like';
import { boundMethod } from 'autobind-decorator';


export class Deferred implements TimeoutLike {
	private nodeTimeout: NodeJS.Timeout;

	public constructor(
		cb: () => void,
		ms: number,
	) {
		this.nodeTimeout = setTimeout(cb, ms);
	}

	/**
	 * @sealed
	 * @decorator `@boundMethod`
	 */
	@boundMethod
	public clear() {
		clearTimeout(this.nodeTimeout);
	}
}
