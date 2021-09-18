import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../core/api/account.service';
import { Account } from '../../../../core/api/account.model';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit {
  account?: Account;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.findAccount().subscribe((account) => (this.account = account));
  }
}
