import { Directive, Output, EventEmitter, AfterViewInit, ElementRef} from '@angular/core';

@Directive({
  selector: '[theme-switch]',
  host: {
  	'(click)': 'onClick()',
  }
})
export class ThemeSwitchDirective implements AfterViewInit {

  @Output() onHide = new EventEmitter();

	body = document.querySelector('body');
  elem;

  constructor(private el: ElementRef) {}

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

    this.elem.classList.add('is-selected');

    setTimeout(() => {
      this.hideThemeSwitch();
      this.elem.classList.remove('is-selected');
    }, 700);

    setTimeout(() => {
      this.elem.classList.add('is-active');
    }, 900);

  }

  hideThemeSwitch() {
    this.onHide.emit();
  }

  ngAfterViewInit() {
    this.elem = this.el.nativeElement;
    // this.elem.parentElement.children[1].classList.add('is-selected');
  }

}
