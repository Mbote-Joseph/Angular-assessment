import { Component } from '@angular/core';
import { Exam } from './pate2748';
import { Company } from './pate2748';
import { RetailData } from './pate2748';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pate2748';
  details: Exam = {
    IDpate2748: 991602598,
    PROGpate2748: 'Computer Systems Technician- Software engineering',
    LOGpate2748: 'pate2748',
    First63903: 'Ritu',
    Last63903: 'Patel',
  };

  company: Company = {
    BusinessNumber: 991602598,
    President: 'Ritu Patel',
    Location: 'India',
    HelpDesk: 'pate2748@sheridancollege.ca',
  };

  // retailData: RetailData[] = RetailData;
}
