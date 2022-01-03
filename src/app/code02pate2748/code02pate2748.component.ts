import { Component, Input, OnInit } from '@angular/core';
import { Exam } from '../pate2748';
@Component({
  selector: 'app-code02pate2748',
  templateUrl: './code02pate2748.component.html',
  styleUrls: ['./code02pate2748.component.css'],
})
export class Code02pate2748Component implements OnInit {
  @Input()
  details: Exam = new Exam();
  constructor() {}
  num: number = 748;
  ngOnInit(): void {}
}
