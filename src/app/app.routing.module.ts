import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './infrastructure/modules/login/login.component';
import {AdminGuard} from './infrastructure/guards/admin.guard';

const routes: Routes = [
        { path: '', redirectTo: '/login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'admin',
                loadChildren: () => import('./infrastructure/modules/admin/admin.module').then(m => m.AdminModule),
                canActivate: [AdminGuard], data: {preload: true}},
        { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule { }
