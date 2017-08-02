import { Component } from '@angular/core';

import { ChathomePage } from '../chathome/chathome';
import { CalendarPage } from '../calendar/calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1 = ChathomePage;
  tab2 = CalendarPage;

  constructor() {}

}
