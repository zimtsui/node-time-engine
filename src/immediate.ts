import {
	TimeoutLike,
	Callback,
} from 'cancellable';


export class Immediate implements TimeoutLike {
	private nodeImmediate: NodeJS.Immediate;
	public constructor(cb: Callback) {
		this.nodeImmediate = globalThis.setImmediate(cb);
	}

	public clear() {
		globalThis.clearImmediate(this.nodeImmediate);
	}
}
