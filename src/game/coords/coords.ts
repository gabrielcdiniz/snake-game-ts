import { DEFAULT_STAGE_SETTINGS } from "../stages/constants";

export abstract class Coords {
  protected $coords: { x: number; y: number };
  protected $block;
  protected $dimensions;

  constructor(
    private readonly _coords = { x: 0, y: 0 },
    private readonly _settings = DEFAULT_STAGE_SETTINGS
  ) {
    const { dimensions, blockSize } = this._settings;
    this.$coords = this._coords;
    this.$dimensions = dimensions;
    this.$block = blockSize;
  }
}
