import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    // need to tell about each component here or else angular wont know about it
    ServerComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  // bootstrap tells angular about the component that should be inserted in the index.html file when the project is ran
  bootstrap: [AppComponent]
})
export class AppModule { }