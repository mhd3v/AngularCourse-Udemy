import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // this decorator allows us to pass data out of the component (in this case we're sending newServerName and newServerContent to the app component)
  @Output()
  //creating the two events we want the cockpit component to emit and be caught by app component
  // defined the data structure we want to be emitted b/w the <> 
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  @Output()
  blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';

  // gettings local reference using viewchild
  // what we get back is an element ref, to the access the underlying element we use .nativeElement
  @ViewChild('serverContentInput') serverContent: ElementRef

  constructor() { }

  ngOnInit() {
  }

  onAddServer(myCustomLocalReference) {
   this.serverCreated.emit({
     serverName: myCustomLocalReference.value, // getting the value from the local reference
     serverContent: this.serverContent.nativeElement.value
   })
  }

  onAddBlueprint(myCustomLocalReference) {
    this.blueprintCreated.emit({
      serverName: myCustomLocalReference.value,
      serverContent: this.serverContent.nativeElement.value
    })
  }

}
