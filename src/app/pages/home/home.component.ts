import { dataFake } from './../../data/dataFake';
import { Component, OnInit } from '@angular/core';
import { Game } from './dataFake.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Game[] = dataFake;
  constructor() { }

  ngOnInit(): void {
  }

}
