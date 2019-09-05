import {Component, OnInit, ElementRef, AfterViewInit} from '@angular/core';
import {GameplayService} from './gameplay.service';

@Component({
  selector: 'app-balotera',
  templateUrl: './balotera.component.html',
  styleUrls: ['./balotera.component.css']
})
export class BaloteraComponent implements OnInit, AfterViewInit {

  title = 'Angular 7 working with Phaser JS';
  game: Phaser.Game;
  gameConfig = {
    title: 'Game Title',
    version: '1.0',
    backgroundColor: '#4488AA',
    type: Phaser.AUTO,
    width: 640,
    height: 480
  };
  numeros: number[] = [];

  public constructor(public mainScene: GameplayService, private el: ElementRef) {
    const offsetHeight = this.el.nativeElement.offsetHeight;
    console.log('constructor::height---' + offsetHeight);

    const offsetWidth = this.el.nativeElement.offsetWidth;
    console.log('constructor::width---' + offsetWidth);

    for (let i = 1; i <= 75; i++) {
      this.numeros.push(i);

    }
  }

  callBall(i: number) {
    this.mainScene.createBall(i, this.game);
  }

  ngAfterViewInit() {

    const offsetHeight = this.el.nativeElement.offsetHeight;
    console.log('ngAfterViewInit::height---' + offsetHeight);

    const offsetWidth = this.el.nativeElement.offsetWidth;
    console.log('ngAfterViewInit::width---' + offsetWidth);


  }

  public onGameReady(game: Phaser.Game): void {
    this.game = game;

    game.scene.add('Scene', this.mainScene, true);
  }


  ngOnInit() {
    const offsetHeight = this.el.nativeElement.offsetHeight;
    console.log('ngOnInit::height---' + offsetHeight);

    const offsetWidth = this.el.nativeElement.offsetWidth;
    console.log('ngOnInit::width---' + offsetWidth);

    this.gameConfig.height = offsetHeight;
    this.gameConfig.width = offsetWidth;
  }

  createBall(index) {
    this.mainScene.createBall(index, this.game);
  }

}
