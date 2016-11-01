import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './components/index';

export const userRoutes: Route[] = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	}
] 