import { Component, HostBinding, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  @HostBinding('class')
  className = 'd-flex flex-column h-100';

  logoutPage: string = '/oauth/logout?redirect=/';
  year = '2021';

  private since = 2021;

  constructor() {}

  ngOnInit(): void {
    const now = moment();

    if (now.year() > this.since) {
      this.year = `2021−${now.year()}`;
    }
  }
}
