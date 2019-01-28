import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // need to provide logging service in order to use the service
  // We don't provide AccountsService because we don't want to create a new instance of the service, 
  // we want  to use the same instance as created by the parent component
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 
  // injecting our custom service is this component
  constructor(private loggingService: LoggingService, private accountService: AccountsService){}

  onSetTo(status: string) {
    // using the services
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);

    // emtting an event which lives inside the service (we will catch it in the new-account component)
    this.accountService.statusUpdated.emit(status);
  }
}
