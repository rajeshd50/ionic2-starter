import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.html'
})
export class LoginComponent implements OnInit {
	user: any = {
		name: '',
		password: ''
	};
	constructor() {}

	ngOnInit() {
		
	}
}