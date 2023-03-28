import { Directive, ElementRef, HostListener, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTextTransfrom]'
})
export class FontColorDirective implements OnChanges,  OnDestroy {
  @Input() UpperCase : string ='';
  @Input() LowerCase : string = '';
  @Input() ColorDirective : string ='';
  constructor(private el : ElementRef) { }

  ngOnChanges(chnages : SimpleChanges) :void
  {
    this.el.nativeElement.style.textTransform = `${this.LowerCase}`;
  }
  @HostListener('mouseover') funMouseOver()
  {
    this.el.nativeElement.style.textTransform = `${this.UpperCase}`;
    this.el.nativeElement.style.fontSize = `30px`;
    this.el.nativeElement.style.color = `${this.ColorDirective}`;
  }
  @HostListener('mouseout') funMouseOut()
  {
    this.el.nativeElement.style.textTransform = `${this.LowerCase}`;
    this.el.nativeElement.style.fontSize = `15px`;
    this.el.nativeElement.style.color = `black`;
  }
  ngOnDestroy(): void {
    console.log("destory");

  }

}
