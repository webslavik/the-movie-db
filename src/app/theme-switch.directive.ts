import { Directive, Input, AfterViewInit, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[theme-switch]',
  host: {
  	'(click)': 'onClick()',
  }
})
export class ThemeSwitchDirective implements AfterViewInit {

	body = document.querySelector('body');
  elem;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  onClick() {
    const parent = this.elem.parentElement;
    const siblings = parent.children;
    const deg = this.elem.dataset.rotate;
    const theme = this.elem.dataset.theme;

    for (let i = 0; i < siblings.length; i++) {
      siblings[i].classList.remove('is-active');
    }

    parent.style.transform = `rotate(${deg}deg)`;
    this.body.className = '';
    this.body.classList.add(theme);

    this.elem.classList.add('is-active');
  }

  ngAfterViewInit() {
    this.elem = this.el.nativeElement;
  }

}
