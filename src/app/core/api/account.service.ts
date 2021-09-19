import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly api: string = '/api/account';

  constructor(private httpClient: HttpClient) {}

  findAccount(): Observable<Account> {
    return this.httpClient.get<Account>(this.api);
  }

  headAccount(): Observable<void> {
    return this.httpClient.head<void>(this.api);
  }
}
