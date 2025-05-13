import { CanActivateFn, Router, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppComponent } from './app.component';
import { MaintainenceComponent } from './pages/maintainence/maintainence.component';
import { inject } from '@angular/core';

const auth:CanActivateFn = (route, state) => {
    const router = inject(Router);
    // return true
    return router.createUrlTree(['/home'])
}

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:'full'},
    {path:"maintenance", component:MaintainenceComponent},
    {path:"home", component:HomePageComponent, canActivate:[auth]}
];
