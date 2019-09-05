import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameplayService extends Phaser.Scene {

  constructor() {
    super({key: GameplayService.KEY});
  }

  public static KEY = 'gameplay';

  balota;

  /**
   * Scene creation handler.
   */
  public create(): void {
    this.cameras.main.startFollow(this.add.text(0, 0, 'Hello there! I am Phaser working with Angular 7').setOrigin(0.5), false);
  }

  preload(): void {
    for (let i = 1 ; i < 76; i++) {
      this.load.image('' + i, '../assets/Balotas/' + i + '.png');
    }
  }

  createBall(index: number, game: Phaser.Game) {
    const scene = this;

    const width = parseInt('' + game.config.width, 10);
    const height = parseInt('' + game.config.height, 10);
    let B = this.balota;
    B = scene.add.image(0, 0, '' + index);
    B.setOrigin(0.5, 0.5);
    const scaleFactor = (width * 0.5) / 600;
    B.setScale(scaleFactor, scaleFactor);
    B.name = 'B' + index;
    B.x = -B.width;
    B.angle = 180;
    const h = height - (B.height * scaleFactor / 2);
    B.setY(h);
    //Balotas.sort('y', Phaser.Group.SORT_ASCENDING);

    //console.log(scene.tweens);
    //var timeline = scene.tweens.createTimeLine();
    const Exit = this.exit;
    const timeLine = scene.tweens.timeline({
      tweens: [
        {
          targets: B,
          x: width / 2,
          angle: 360,
          duration : 1000
        },
        {
          targets: B,
          x: width / 2,
          angle: 0,
          duration : 2000
        },
        {
          targets: B,
          x: width + B.width,
          angle: 540,
          duration : 1000,
          onComplete: Exit
        }
      ]
    });
  }

  exit() {
    if (this.balota) {
      this.balota.destroy();
    }
  }
}
