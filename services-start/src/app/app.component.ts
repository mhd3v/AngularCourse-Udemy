import { Component, OnInit } from '@angular/core';
import { AccountsService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // need accounts here because we need to loop through it in our template
  accounts: {name:string, status:string}[] = [];

  constructor(private accountsService: AccountsService){}

  ngOnInit(){
    // gettings accounts data from the service
    this.accounts = this.accountsService.accounts;
  }
}
