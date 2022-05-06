import { TimeoutLike } from 'time-engine-like';


export class Immediate implements TimeoutLike {
	private nodeImmediate: NodeJS.Immediate;
	public constructor(cb: () => void) {
		this.nodeImmediate = setImmediate(cb);
	}

	public clear() {
		clearImmediate(this.nodeImmediate);
	}
}
