import { Component, HostBinding, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AccountService } from '../../../../core/api/account.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  @HostBinding('class')
  className = 'd-flex flex-column h-100';

  logoutPage: string = '/oauth/logout';
  year = '2021';

  private since = 2021;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.headAccount().subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        if (error.status >= 300 || error.status < 400) {
          window.location.reload();
        }
      }
    );

    const now = moment();

    if (now.year() > this.since) {
      this.year = `2021−${now.year()}`;
    }

    const redirect = `${window.location.protocol}//${window.location.hostname}`;
    this.logoutPage = `${this.logoutPage}?redirect=${redirect}`;
  }
}
