import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import { LoginComponent } from './infrastructure/modules/login/login.component';
import {AppRoutingModule} from "./app.routing.module";
import {LoginService} from "./infrastructure/service/login.service";
import {ServiceService} from "./infrastructure/service/service.service";
import {InterceptorService} from "./infrastructure/service/interceptor.service";

@NgModule({
        declarations: [
                AppComponent,
                LoginComponent
        ],
        imports: [
                BrowserModule,
                HttpClientModule,
                FormsModule,
                AppRoutingModule,
                BrowserAnimationsModule
        ],
        providers: [
                LoginService,
                ServiceService,
                {
                        provide: HTTP_INTERCEPTORS,
                        useClass: InterceptorService,
                        multi: true
                }
        ],
        bootstrap: [AppComponent]
})
export class AppModule {
}
