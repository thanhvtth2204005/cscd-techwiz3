import { Component, OnInit } from '@angular/core';
import feedback from "../../../assets/data/feedback.json"

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  data = feedback;
  constructor() { }

  ngOnInit(): void {
  }

}
