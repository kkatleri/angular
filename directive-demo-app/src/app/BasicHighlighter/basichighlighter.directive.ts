import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasichighlighter]'
})
export class BasichighlighterDirective implements OnInit{

  constructor(private elRef: ElementRef) { }

  ngOnInit(){
    this.elRef.nativeElement.style.backgroundColor = 'green';
  }


}
