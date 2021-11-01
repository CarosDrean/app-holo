import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Title} from "@angular/platform-browser";
import {User, UserLogin} from "../../../models/user";

@Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

        email: string;
        password: string;

        constructor(private ls: LoginService, private title: Title) {
                title.setTitle('HoloSalud | Login');
                this.email = ''
                this.password = ''
        }

        ngOnInit() {
        }

        login(): void {
                const user: User = {
                        user_name: this.email,
                        name: '',
                        password: this.password,
                        type: 0,
                        particular: false,
                };

                this.ls.logIn(user).subscribe((res) => {
                                const userLogin: UserLogin = res.data

                                if (userLogin) {
                                        this.ls.sessionIn(userLogin.user.id, userLogin.user.type, userLogin.token);
                                }
                        },
                        error => {
                                console.log(error);
                                console.log(error.error);
                        });
        }

}
