import { 
  Component,
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //Native, None
})
export class ServerElementComponent implements 
    OnInit, 
    OnChanges, 
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input('serverElement') element: {type: string, name: string, content: string};
  @Input() updatedServerName: string; //This is to demonstrate ngOnChange event when input value changes. It does not identify reference value change.
  @ContentChild('paragraphContent') paragraphContent : ElementRef;

  constructor() { 
    console.log("Constructor called!");
  }

  ngOnInit() {
    console.log("ngOnInit called!");
    console.log("Paragraph Content - "+ this.paragraphContent.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngDoCheck(){
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called!");
    console.log("Paragraph Content - "+ this.paragraphContent.nativeElement.textContent)
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!");
    console.log("Paragraph Content - "+ this.paragraphContent.nativeElement.textContent)
  }

  ngAfterViewInit(){
    console.log("ngAfterViewtInit called!");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called!");
  }
}
