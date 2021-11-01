import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainComponent} from './main/main.component';
import {ServiceComponent} from './service/service.component';
import {FormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin.routing.module";

@NgModule({
        declarations: [
                MainComponent,
                ServiceComponent
        ],
        imports: [
                CommonModule,
                FormsModule,
                AdminRoutingModule
        ]
})
export class AdminModule {
}
