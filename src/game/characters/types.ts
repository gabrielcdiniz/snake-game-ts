export type SnakeSettings = {
  ctx: CanvasRenderingContext2D;
  color: string;
};

export type TailSettings = SnakeSettings & {
  head: boolean;
};
