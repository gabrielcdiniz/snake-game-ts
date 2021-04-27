import "./../assets/css/app.css";

export class App {
  private $app!: HTMLDivElement;
  private $id!: string;

  constructor() {
    this.$id = App.name;
    this.render();
  }

  private render() {
    this.addAppRoot().addAppHeader().addAppCanvas().addAppFooter();
    return this;
  }

  private addAppRoot() {
    this.$app = this.$app || document.createElement("div");
    this.$app.id = this.$id;
    document.body.prepend(this.$app);
    return this;
  }

  private addAppHeader() {
    return this;
  }

  private addAppCanvas() {
    return this;
  }

  private addAppFooter() {
    return this;
  }
}
