import "./stage.default.css";
import { DEFAULT_STAGE_SETTINGS } from "./../constants";

export class StageDefault {
  public ID: string = "stage-default";

  protected $dimensions;
  protected $block;
  protected $ctx!: CanvasRenderingContext2D;

  constructor(private readonly _settings = DEFAULT_STAGE_SETTINGS) {
    const { ref, dimensions, blockSize } = this._settings;
    this.$dimensions = dimensions;
    this.$block = blockSize;
    this.create(ref);
  }

  protected create(ref: HTMLElement) {
    const stage = document.createElement("canvas");
    stage.id = this.ID;
    const { width, height } = this.$dimensions;
    stage.width = width;
    stage.height = height;
    ref.prepend(stage);
    this.setContext(stage);
    this.drawGrid();
    return this;
  }

  private setContext(stage: HTMLCanvasElement) {
    this.$ctx = stage.getContext("2d") as CanvasRenderingContext2D;
  }

  private drawGrid() {
    this.$ctx!.strokeStyle = "darkslategray";
    this.$ctx!.globalAlpha = 0.3;
    const { width: x, height: y } = this.$dimensions;
    for (let i = 0; i <= x; i += this.$block) {
      for (let j = 0; j <= y; j += this.$block) {
        this.$ctx?.strokeRect(i, j, this.$block, this.$block);
      }
    }
    this.$ctx?.save();
  }
}
