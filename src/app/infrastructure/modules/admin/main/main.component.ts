import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subscription} from "rxjs";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

import {LoginService} from "../../../service/login.service";
import {User} from "../../../../models/user";
import {Utils} from "../../../../utils/utils";

import * as feather from 'feather-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

        private subscription: Subscription;

        userName: Observable<string>;
        search: Observable<string>;
        user: User;
        searchText: string;

        constructor(private ls: LoginService, private router: ActivatedRoute, private title: Title, private route: Router) {
                title.setTitle('HoloSalud | Resultados');
                this.subscription = new Subscription();
                this.searchText = '';
                this.userName = of('Oscar')
                this.search = of('')
                this.user = {user_name: '', name: '', particular: false, password: '', type: 0}
        }

        ngOnInit() {
                feather.replace();
                Utils.loadScript();

                this.subscription.add(this.route.events.subscribe((e) => {
                        if (e instanceof NavigationEnd) {
                                this.searchText = '';
                        }
                }));
        }

        ngOnDestroy(): void {
                this.subscription.unsubscribe();
        }

        logOut(): void {
                this.ls.logOut();
        }

}
