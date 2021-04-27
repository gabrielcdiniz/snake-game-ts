import { Coords } from "../coords/coords";
import { DEFAULT_STAGE_SETTINGS } from "../stages/constants";
import { DEFAULT_CONTROLS_SETTINGS } from "./constants";
import { DirectionController } from "./types";

export abstract class Controller extends Coords {
  public ID!: string;
  protected $controls;
  protected $direction: DirectionController = "RIGHT";

  constructor(private readonly _controls = DEFAULT_CONTROLS_SETTINGS) {
    super();
    this.$controls = this._controls;
    this.listen();
  }

  private listen() {
    document.addEventListener("keydown", this.handleMovement.bind(this), false);
  }

  private handleMovement(ev: KeyboardEvent) {
    const { up, down, left, right } = this.$controls;
    switch (ev.key) {
      case up:
        this.$direction = "UP";
        // this.moveUP();
        break;
      case down:
        this.$direction = "DOWN";
        // this.moveDOWN();
        break;
      case left:
        this.$direction = "LEFT";
        // this.moveLEFT();
        break;
      case right:
        this.$direction = "RIGHT";
        // this.moveRIGHT();
        break;
      default:
        break;
    }
  }

  protected abstract moveUP(): void;
  protected abstract moveDOWN(): void;
  protected abstract moveLEFT(): void;
  protected abstract moveRIGHT(): void;
}
