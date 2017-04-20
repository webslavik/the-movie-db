import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	switchTheme: boolean = false;

	themeData = [
		{ color: 'black', theme: 't-black', deg: 90 },
		{ color: 'white', theme: 't-white', deg: 0 },
		{ color: 'yellow', theme: 't-yellow', deg: 180 },
		{ color: 'purple', theme: 't-purple', deg: -90 }
	];

	constructor() {}

	onSwitchThemes() {
		this.switchTheme = !this.switchTheme;
		console.log(this.switchTheme);
	}

	changeTheme() {
		
	}

	ngOnInit() {
	}

}
