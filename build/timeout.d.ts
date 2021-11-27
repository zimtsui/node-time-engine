/// <reference types="node" />
export declare type TimeoutId = {
    type: 'NodeJS.Timeout';
    value: NodeJS.Timeout;
} | {
    type: 'NodeJS.Immediate';
    value: NodeJS.Immediate;
} | {
    type: 'null';
    value: null;
};
export declare function setTimeout(cb: () => void, ms: number): TimeoutId;
export declare function clearTimeout(id: TimeoutId): void;
