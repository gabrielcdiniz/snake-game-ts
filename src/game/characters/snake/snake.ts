import { Controller } from "../../controllers/controller";
import { SnakeSettings } from "../types";
import { Tail } from "./tail";

export class Snake extends Controller {
  private readonly _size = 4;
  private _tail: Tail[] = [];
  protected $color;

  constructor(private readonly _snakeSettings: SnakeSettings) {
    super();
    const { color } = this._snakeSettings;
    this.$color = color;
    this.createTail();
  }

  public walk() {
    switch (this.$direction) {
      case "UP":
        this.moveUP();
        break;
      case "DOWN":
        this.moveDOWN();
        break;
      case "LEFT":
        this.moveLEFT();
        break;
      case "RIGHT":
        this.moveRIGHT();
        break;
      default:
        break;
    }
  }

  private createTail() {
    const { width, height } = this.$dimensions;
    do {
      const x = width / 2 - this._tail.length * this.$block;
      const y = height / 2;
      const position = { x, y };
      const head = this._tail.length === 0;
      const tailSettings = { ...this._snakeSettings, head };

      this._tail.push(new Tail(position, tailSettings));
    } while (this._tail.length < this._size);
    console.log("TAIL", this._tail);
  }

  private updateTail(newerPosition: { x: number; y: number }) {
    let olderPosition!: { x: number; y: number };
    for (const index in this._tail) {
      if (this._tail.hasOwnProperty(index)) {
        const tail = this._tail[index];
        const currentPosition = tail.COORD;

        if (tail.HEAD) {
          olderPosition = currentPosition;
          tail.update(newerPosition);
          continue;
        }

        tail.update(olderPosition);
        olderPosition = currentPosition;
      }
    }
  }

  protected moveUP() {
    const currentPosition = this._tail[0].COORD;
    const x = currentPosition.x;
    const y = currentPosition.y - this.$block;
    const newPosition = { x, y };
    this.updateTail(newPosition);
  }

  protected moveDOWN() {
    const currentPosition = this._tail[0].COORD;
    const x = currentPosition.x;
    const y = currentPosition.y + this.$block;
    const newPosition = { x, y };
    this.updateTail(newPosition);
  }

  protected moveLEFT() {
    const currentPosition = this._tail[0].COORD;
    const x = currentPosition.x - this.$block;
    const y = currentPosition.y;
    const newPosition = { x, y };
    this.updateTail(newPosition);
  }

  protected moveRIGHT() {
    const currentPosition = this._tail[0].COORD;
    const x = currentPosition.x + this.$block;
    const y = currentPosition.y;
    const newPosition = { x, y };
    this.updateTail(newPosition);
  }
}
