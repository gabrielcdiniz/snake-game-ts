import "./assets/css/global.css";
import { Game } from "./game/index";

function bootstrap() {
  const game = new Game();
  game.start();
}
bootstrap();
