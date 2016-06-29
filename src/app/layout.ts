import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HTTP_PROVIDERS}    from '@angular/http';
import {USER_SERVICE_PROVIDER}       from './common/services/UserServiceProvider';

@Component({
    selector: 'app-boot',
    template:
    `
    <!-- Fixed navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Rutha Stack</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active">
                  <a [routerLink]="['/main']">Home</a>
            </li>
            <li><a [routerLink]="['/signup']">Signup</a></li>
            <li><a [routerLink]="['/login/main']">Login</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>    
    <div class="container">
         <router-outlet></router-outlet>
    </div>

    <div class="footer">
        <div class="container">
            <p class="text-muted">Rutha / MIT Licensed / Made in Panama.</p>
        </div>
    </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HTTP_PROVIDERS,
        USER_SERVICE_PROVIDER
    ]
})
export class LayoutComponent implements OnInit {
    constructor() {
    }
    ngOnInit() {
       // this._router.navigate(['Index']);
    }
}