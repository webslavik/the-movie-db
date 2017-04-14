import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnInit {

	@Input() showThemes;
	@Output() hideThemes = new EventEmitter<any>();

	themeData = [
			{
				color: 'black',
				theme: 't-black',
				deg: 90
			},
			{
				color: 'white',
				theme: 't-white',
				// defaultTheme: 'is-active',
				deg: 0
			},
			{
				color: 'yellow',
				theme: 't-yellow',
				deg: 180
			},
			{
				color: 'purple',
				theme: 't-purple',
				deg: -90
			}
		];

	onHideThemes() {
		this.showThemes = !this.showThemes;
		this.hideThemes.emit(this.showThemes);
  	console.log(this.showThemes);
	}

  ngOnInit() {
  }

}
