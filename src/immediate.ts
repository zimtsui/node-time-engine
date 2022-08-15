import { TimeoutLike } from 'time-engine-like';
import { boundMethod } from 'autobind-decorator';


export class Immediate implements TimeoutLike {
	private nodeImmediate: NodeJS.Immediate;
	public constructor(cb: () => void) {
		this.nodeImmediate = setImmediate(cb);
	}

	/**
	 * @sealed
	 * @decorator boundMethod
	 */
	@boundMethod
	public clear() {
		clearImmediate(this.nodeImmediate);
	}
}
