import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
/*export class DropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('class') classes;

  @HostListener('click') click(){
    this.elRef.nativeElement.className.indexOf('open') > -1 ? this.renderer.removeClass(this.elRef.nativeElement, 'open')
                                                            : this.renderer.addClass(this.elRef.nativeElement, 'open');
  }

}*/

export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleDropdown(){
    this.isOpen = !this.isOpen;
  }
}
