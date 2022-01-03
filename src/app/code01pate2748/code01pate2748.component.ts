import { Component, Input, OnInit } from '@angular/core';
import { Exam } from '../pate2748';

@Component({
  selector: 'app-code01pate2748',
  templateUrl: './code01pate2748.component.html',
  styleUrls: ['./code01pate2748.component.css'],
})
export class Code01pate2748Component implements OnInit {
  @Input()
  details: Exam = new Exam();

  picturename = '../assets/images/girl.jpg';
  constructor() {}

  ngOnInit(): void {}
}
