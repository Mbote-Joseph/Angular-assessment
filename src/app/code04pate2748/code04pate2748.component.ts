import { Component, Input, OnInit } from '@angular/core';
import { Exam } from '../pate2748';

@Component({
  selector: 'app-code04pate2748',
  templateUrl: './code04pate2748.component.html',
  styleUrls: ['./code04pate2748.component.css'],
})
export class Code04pate2748Component implements OnInit {
  @Input()
  details: Exam = new Exam();
  constructor() {}

  ngOnInit(): void {}
}
