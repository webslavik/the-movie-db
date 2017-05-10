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


    if (this.elem.classList.contains('is-active')) {

      setTimeout(() => {
        this.hideThemeSwitch();
      }, 150);

    } else {

      for (let i = 0; i < siblings.length; i++) {
        if (siblings[i].classList.contains('is-active'))
          siblings[i].classList.remove('is-active');
      }

      this.elem.classList.add('is-selected');

      parent.style.transform = `rotate(${deg}deg)`;
      this.body.className = '';
      this.body.classList.add(theme);

      setTimeout(() => {
        this.hideThemeSwitch();
        this.elem.classList.remove('is-selected');
      }, 700);

      setTimeout(() => {
        this.elem.classList.add('is-active');
      }, 900);
    }
  }


  hideThemeSwitch() {
    this.onHide.emit();
  }

  ngAfterViewInit() {
    this.elem = this.el.nativeElement;
    this.elem.parentElement.children[1].classList.add('is-active');
  }

}
