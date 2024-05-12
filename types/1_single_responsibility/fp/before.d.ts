export function Mario(args: Object): MarioContext;
export function Turtle(args: Object): TurtleContext;
export type Jump = () => any;
export type Walk = () => any;
export type MarioContext = {
    jump: Jump;
};
export type TurtleContext = {
    walk: Walk;
};
