import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';
import { MockDirectiveResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appAdvancedHighlighter]'
})
export class AdvancedHighlighterDirective implements OnInit{

  @Input() defaultBackgroundColor : string = "transparent";
  @Input() highlightedBackgroundColor : string = "blue";
  @Input() defaultFontColor : string = "black";
  @Input() highlightedFontColor : string = "white";
  
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultBackgroundColor;
  @HostBinding('style.color') font_color: string = this.defaultFontColor;
  

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseenter') mouseOver(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'yellow');
    this.backgroundColor = this.highlightedBackgroundColor;
    this.font_color = this.highlightedFontColor;
  }

  @HostListener('mouseleave') mouseLeave(){
   // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
   this.backgroundColor = this.defaultBackgroundColor;
   this.font_color = this.defaultFontColor;
  }

}
