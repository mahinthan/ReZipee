import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseover') mouseover(enentData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseout') mouseout(enentData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
