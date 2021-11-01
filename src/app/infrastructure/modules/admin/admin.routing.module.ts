import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {MainComponent} from "./main/main.component";
import {ServiceComponent} from "./service/service.component";

const routes: Routes = [
        {
                path: '',
                component: MainComponent,
                children: [
                        {
                                path: '',
                                children: [
                                        {path: 'dashboard', component: ServiceComponent},
                                        {path: 'service', component: ServiceComponent},
                                        {path: '**', pathMatch: 'full', redirectTo: 'dashboard'},
                                ]
                        }
                ]
        }
];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
})
export class AdminRoutingModule {
}
