import { Component, OnInit } from '@angular/core';
import home from '../../../assets/data/home.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeOption = home;
  constructor() {}

  ngOnInit(): void {}
}
