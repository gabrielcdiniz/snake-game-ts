import { Snake } from "./characters/snake/snake";
import { StageDefault } from "./stages/stage-default/stage.default";

export class Game {
  private _interval!: number;
  private _speed = 250;
  protected $player!: Snake;
  protected $stage!: StageDefault;
  protected $ctx!: CanvasRenderingContext2D;

  public start() {
    this.createStage();
    this._interval = setInterval(this.update.bind(this), this._speed);
    this.$player = new Snake({ ctx: this.$ctx, color: "silver" });
  }

  private update() {
    console.log("work");
    try {
      this.$player.walk();
    } catch (error) {
      console.error(error);
    }
  }

  private gameover() {
    clearInterval(this._interval);
    alert("you lose");
  }

  private createStage() {
    this.$stage = new StageDefault();
    this.getContext(this.$stage.ID);
  }

  private getContext(id: string) {
    this.$ctx = (document.getElementById(id) as HTMLCanvasElement)?.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
  }
}
