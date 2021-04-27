import { Coords } from "../../coords/coords";
import { TailSettings } from "./../types";

export class Tail extends Coords {
  public HEAD;
  private _ctx;
  protected $color;

  public get COORD(): { x: number; y: number } {
    return this.$coords;
  }
  public set COORD(v: { x: number; y: number }) {
    this.$coords = v;
  }

  constructor(
    private readonly _position: { x: number; y: number },
    private readonly _tailSettings: TailSettings
  ) {
    super(_position);
    this.$coords = this._position;
    const { ctx, color, head } = this._tailSettings;
    this._ctx = ctx;
    this.$color = color;
    this.HEAD = head;
    this.draw();
  }

  public update(position: { x: number; y: number }) {
    this.erase();
    this.$coords = position;
    this.checkBorders();
    this.draw();
  }

  private erase() {
    const { x, y } = this.$coords;
    // console.log("ERASE", this.$coords);
    this._ctx.clearRect(x + 1, y + 1, this.$block - 2, this.$block - 2);
  }

  private draw(color: string = this.$color) {
    const { x, y } = this.$coords;
    // console.log("DRAW", this.$coords);
    this._ctx.fillStyle = color;
    this._ctx.fillRect(x + 1, y + 1, this.$block - 2, this.$block - 2);
  }

  private checkBorders() {
    this.checkTOP();
    this.checkBOTTOM();
    this.checkLEFTSIDE();
    this.checkRIGHTSIDE();
  }

  private checkTOP() {
    const { height } = this.$dimensions;
    const { y } = this.$coords;
    if (y < 0) {
      const pos = height - this.$block;
      this.$coords.y = pos;
    }
  }

  private checkBOTTOM() {
    const { height } = this.$dimensions;
    const { y } = this.$coords;
    if (y >= height) {
      const pos = 0;
      this.$coords.y = pos;
    }
  }

  private checkRIGHTSIDE() {
    const { width } = this.$dimensions;
    const { x } = this.$coords;
    if (x >= width) {
      const pos = 0;
      this.$coords.x = pos;
    }
  }

  private checkLEFTSIDE() {
    const { width } = this.$dimensions;
    const { x } = this.$coords;
    if (x < 0) {
      const pos = width - this.$block;
      this.$coords.x = pos;
    }
  }
}
