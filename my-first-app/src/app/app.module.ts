import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    // need to tell about each component here or else angular wont know about it
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // bootstrap tells angular about the component that should be inserted in the index.html file when the project is ran
  bootstrap: [AppComponent]
})
export class AppModule { }