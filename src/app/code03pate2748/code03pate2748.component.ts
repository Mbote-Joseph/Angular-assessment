import { Component, Input, OnInit } from '@angular/core';
import { Exam } from '../pate2748';

@Component({
  selector: 'app-code03pate2748',
  templateUrl: './code03pate2748.component.html',
  styleUrls: ['./code03pate2748.component.css'],
})
export class Code03pate2748Component implements OnInit {
  @Input()
  details: Exam = new Exam();

  constructor() {}

  ngOnInit(): void {}
}
