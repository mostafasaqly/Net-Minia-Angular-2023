import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective implements OnChanges {
  @Input() borderColor :string = 'orange';
  @Input() borderColor2 :string = 'brown';
  @Input() colorDirective : boolean = false;
  constructor(private el:ElementRef) {

   }
  ngOnChanges(changes: SimpleChanges) : void {
    this.el.nativeElement.style.border = `0px solid ${this.borderColor}`;
    this.el.nativeElement.style.width = `10px`;
    this.el.nativeElement.style.height = `10px`;
   }
   @HostListener('mouseover') funMouseOver()
   {
     this.el.nativeElement.style.border = `6px solid ${this.borderColor}`;
     this.el.nativeElement.style.width = `100px`;
     this.el.nativeElement.style.height = `100px`;
   }
   @HostListener('mouseout') funMouseOut()
   {
    this.el.nativeElement.style.border = `3px dashed ${this.borderColor2}`;
    this.el.nativeElement.style.width = `70px`;
    this.el.nativeElement.style.height = `70px`;
   }

}
