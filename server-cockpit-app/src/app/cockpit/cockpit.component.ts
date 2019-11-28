import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //newServerName = ""; 
  //newServerContent = "";
  @ViewChild("serverContentInput") serverContentInput: ElementRef;
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
  @Output() serverNameUpdated = new EventEmitter<string>();
  @Output() serverDeleted = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement){
    this.serverCreated.emit({
      name: serverNameInput.value,
      content: this.serverContentInput.nativeElement.value
    })
  }

  onAddBluePrint(serverNameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      name: serverNameInput.value,
      content: this.serverContentInput.nativeElement.value
    })
  }

  onUpdateServer(serverNameInput: HTMLInputElement){
    this.serverNameUpdated.emit(serverNameInput.value);
  }

  onDeleteServer(serverNameInput: HTMLInputElement){
    this.serverDeleted.emit();
  }

}
