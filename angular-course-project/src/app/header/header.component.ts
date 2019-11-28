import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector : 'app-header',
    templateUrl : "./header.component.html",
    styleUrls : []
})
export class HeaderComponent implements OnInit{

    @Output() onTabSelectorChange = new EventEmitter<string>();

    constructor(){
    }

    ngOnInit(){
    }

    onSelect(feature: string){
        this.onTabSelectorChange.emit(feature);
    }
    
}