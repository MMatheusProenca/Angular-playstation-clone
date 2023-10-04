import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {
  @Input()
  gameCover:string = ''
  @Input()
  tagEspecial:string = ''
  @Input()
  nameGame:string = ''
  @Input()
  typeGame:string = ''
  @Input()
  console:string = ''
  @Input()
  price:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
