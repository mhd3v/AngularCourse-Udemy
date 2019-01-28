import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // need to provide logging service in order to use the service
  // We don't provide AccountsService because we don't want to create a new instance of the service, 
  // we want  to use the same instance as created by the parent component
  // providers: [LoggingService] 
})
export class NewAccountComponent {

  // injecting our custom service is this component
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){
    // the event we fire in account component is being caught here by subcribing to it
    this.accountsService.statusUpdated.subscribe((status: string) => alert('New status: ' + status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // using the services
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);

  }
  
}
