import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	showThemes: boolean = false;

  onShowThemes() {
  	this.showThemes = !this.showThemes;
  	console.log(this.showThemes);
  }

  ngOnInit() {
  }

}
