import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerContent = [
    {
      title: 'Medical specialist',
      subTitle: 'Find a doctor by specialty',
    },
    {
      title: 'Health facilities',
      subTitle: 'Choose hospital, clinic',
    },
    {
      title: 'Doctor',
      subTitle: 'Choose a good doctor',
    },
    {
      title: 'Check-up package',
      subTitle: 'General health check',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
