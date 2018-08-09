webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_property_component__ = __webpack_require__("./src/app/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__docs_docs_component__ = __webpack_require__("./src/app/docs/docs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clients_clients_component__ = __webpack_require__("./src/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_contacts_component__ = __webpack_require__("./src/app/contacts/contacts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], data: { state: 'home' } },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_4__projects_projects_component__["a" /* ProjectsComponent */], data: { state: 'projects' } },
    { path: 'property/:id', component: __WEBPACK_IMPORTED_MODULE_3__property_property_component__["a" /* PropertyComponent */], data: { state: 'property' } },
    { path: 'docs', component: __WEBPACK_IMPORTED_MODULE_5__docs_docs_component__["a" /* DocsComponent */], data: { state: 'docs' } },
    { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_6__clients_clients_component__["a" /* ClientsComponent */], data: { state: 'clients' } },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_7__contacts_contacts_component__["a" /* ContactsComponent */], data: { state: 'contacts' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "    <svg class=\"sprites\">\r\n      <symbol viewBox=\"0 0 30 9\" id=\"Arrow-left\">\r\n        <polygon points=\"30,3.5 3.6,3.5 5.7,1.3 4.4,0 0,4.4 4.4,8.9 5.7,7.6 3.6,5.4 30,5.4 \"/>\r\n      </symbol>\r\n      <symbol viewBox=\"0 0 30 9\" id=\"Arrow-right\">\r\n        <polygon  points=\"0,5.4 26.3,5.4 24.2,7.6 25.5,8.9 30,4.4 25.5,0 24.2,1.3 26.3,3.5 0,3.5 \"/>\r\n      </symbol>\r\n      <symbol id=\"Arrow-top\" viewBox=\"0 0 9 30\">\r\n        <polygon points=\"5.4,30 5.4,3.6 7.6,5.8 8.9,4.4 4.4,0 0,4.4 1.3,5.8 3.5,3.6 3.5,30 \"/>\r\n      </symbol>\r\n      <symbol id=\"Arrow-down\" viewBox=\"0 0 9 30\">\r\n        <polygon points=\"3.5,0 3.5,26.4 1.3,24.2 0,25.6 4.4,30 8.9,25.6 7.6,24.2 5.4,26.4 5.4,0 \"/>\r\n      </symbol>\r\n    </svg>\r\n\r\n\r\n\r\n    <header>\r\n      <a routerLink=\"/\" title=\"на главную\" id=\"logo-link\" (click)=\"hideMenu()\">\r\n        <img src=\"assets/img/logo.svg\" alt=\"логотип ск зенит\">\r\n      </a>\r\n\r\n\r\n      <nav class=\"header-nav\" (click)=\"hideMenu()\">\r\n        <a routerLink=\"/projects/\" routerLinkActive=\"active\">проекты</a>\r\n        <a routerLink=\"\"  routerLinkActive=\"active\">о нас</a>\r\n        <a routerLink=\"/clients\" routerLinkActive=\"active\">клиенты и партнеры</a>\r\n        <a routerLink=\"/docs\" routerLinkActive=\"active\">документы</a>\r\n        <a routerLink=\"/contacts\" routerLinkActive=\"active\">контакты</a>\r\n      </nav>\r\n\r\n      <a class=\"header-phone\" href=\"tel:+7 (423) 297-97-75\">\r\n        +7 (423) 297-97-75\r\n      </a>\r\n\r\n      <button class=\"hamburger hamburger--minus\" type=\"button\"\r\n      (click)=\"menu=!menu\" [ngClass]=\"{'is-active':menu}\">\r\n        <span class=\"hamburger-box\">\r\n          <span class=\"hamburger-inner\"></span>\r\n        </span>\r\n      </button>\r\n\r\n    </header>\r\n\r\n\r\n    <main [ngClass]=\"{'menu-open':menu}\">\r\n\r\n\r\n      <div class=\"mobile-nav\">\r\n        <div class=\"mobile-nav__pagelinks\" (click)=\"hideMenu()\">\r\n          <a routerLink=\"/projects/\" routerLinkActive=\"active\">проекты</a>\r\n          <a routerLink=\"\"  routerLinkActive=\"active\">о нас</a>\r\n          <a routerLink=\"/clients\" routerLinkActive=\"active\">клиенты и партнеры</a>\r\n          <a routerLink=\"/docs\" routerLinkActive=\"active\">документы</a>\r\n          <a routerLink=\"/contacts\" routerLinkActive=\"active\">контакты</a>\r\n\r\n          <a class=\"header-phone mobile-phone\" href=\"tel:+7 (423) 297-97-75\">\r\n            +7 (423) 297-97-75\r\n          </a>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"container\">\r\n        <div [@fadeAnimation]=\"getRouteAnimation(route)\">\r\n          <router-outlet #route=\"outlet\"></router-outlet>\r\n        </div>\r\n      </div>\r\n\r\n    </main>\r\n\r\n    <!-- custom modal setup -->\r\n    <div id=\"modal-container\" class=\"hidden\"></div>\r\n    <div id=\"overlay\" class=\"hidden\"></div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fade_animation__ = __webpack_require__("./src/app/fade.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.menu = false;
    }
    // change the animation state
    AppComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent.prototype.hideMenu = function () {
        this.menu = !this.menu;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            animations: [__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */], __WEBPACK_IMPORTED_MODULE_2__fade_animation__["a" /* fadeAnimation */]],
            template: __webpack_require__("./src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_swiper_wrapper__ = __webpack_require__("./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_perfect_scrollbar__ = __webpack_require__("./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__property_property_component__ = __webpack_require__("./src/app/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__docs_docs_component__ = __webpack_require__("./src/app/docs/docs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__clients_clients_component__ = __webpack_require__("./src/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contacts_contacts_component__ = __webpack_require__("./src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modal_prop_modal_prop_component__ = __webpack_require__("./src/app/modal-prop/modal-prop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__property_service__ = __webpack_require__("./src/app/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__docs_service__ = __webpack_require__("./src/app/docs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__slide_service__ = __webpack_require__("./src/app/slide.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__company_service__ = __webpack_require__("./src/app/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__contact_service__ = __webpack_require__("./src/app/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dom_service__ = __webpack_require__("./src/app/dom.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__modal_service__ = __webpack_require__("./src/app/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__safe_pipe__ = __webpack_require__("./src/app/safe.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// MODULES








// COMPONENTS








// SERVICES







// PIPES

//CLASSES & INTERFACES
var DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__property_property_component__["a" /* PropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__docs_docs_component__["a" /* DocsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__safe_pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_15__modal_prop_modal_prop_component__["a" /* ModalPropComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_swiper_wrapper__["c" /* SwiperModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_perfect_scrollbar__["a" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_5_ngx_swiper_wrapper__["a" /* SWIPER_CONFIG */], useValue: DEFAULT_SWIPER_CONFIG },
                __WEBPACK_IMPORTED_MODULE_16__property_service__["a" /* PropertyService */],
                __WEBPACK_IMPORTED_MODULE_17__docs_service__["a" /* DocsService */],
                __WEBPACK_IMPORTED_MODULE_18__slide_service__["a" /* SlideService */],
                __WEBPACK_IMPORTED_MODULE_19__company_service__["a" /* CompanyService */],
                __WEBPACK_IMPORTED_MODULE_20__contact_service__["a" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_22__modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_21__dom_service__["a" /* DomService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__modal_prop_modal_prop_component__["a" /* ModalPropComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"page page-companies\">\r\n\r\n  <section class=\"companies clients\">\r\n\r\n    <h1 class=\"companies-heading\">клиенты</h1>\r\n\r\n    <div class=\"swiper-outer-wrap clients\">\r\n      <div #swiper1 class=\"swiper-container clients\" [swiper]=\"config_a\">\r\n\r\n        <div class=\"swiper-wrapper\">\r\n\r\n          <div class=\"clients__item swiper-slide\" *ngFor=\"let client of clients\">\r\n            <div class=\"clients__img-wrap\">\r\n              <img [src]=\"client.thumb\"/>\r\n            </div>\r\n\r\n            <div class=\"clients__item-content\">\r\n              <h4 class=\"clients__name\">\r\n                {{client.name}}\r\n              </h4>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"clients__controls\">\r\n        <button class=\"sc ol ol-prev ol-prev-c arrw-hor\"><svg><use xlink:href=\"#Arrow-left\"/></svg></button>\r\n        <div class=\"swiper-scrollbar swiper-scrollbar-c\"></div>\r\n        <button class=\"sc ol ol-next ol-next-c arrw-hor\"><svg><use xlink:href=\"#Arrow-right\"/></svg></button>\r\n      </div>\r\n    </div>\r\n\r\n  </section>\r\n\r\n\r\n<section class=\"companies partners\">\r\n\r\n  <h1 class=\"companies-heading\">партнеры</h1>\r\n\r\n\r\n  <div class=\"swiper-outer-wrap clients\">\r\n\r\n    <div #swiper2 class=\"swiper-container partners\" [swiper]=\"config_b\">\r\n      <div class=\"swiper-wrapper\">\r\n\r\n        <div class=\"partners__item swiper-slide\" *ngFor=\"let partner of partners\">\r\n          <div class=\"partners__img-wrap\">\r\n            <img [src]=\"partner.thumb\"/>\r\n          </div>\r\n\r\n          <div class=\"partners__item-content\">\r\n            <h4 class=\"partners__name\">\r\n              {{partner.name}}\r\n            </h4>\r\n            {{partner.content}}\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div> <!-- swiper end -->\r\n\r\n    <div class=\"partners__controls\">\r\n      <button class=\"sc ol ol-prev ol-prev-p arrw-hor\"><svg><use xlink:href=\"#Arrow-left\"/></svg></button>\r\n      <div class=\"swiper-scrollbar swiper-scrollbar-p client\"></div>\r\n      <button class=\"sc ol ol-next ol-next-p arrw-hor\"><svg><use xlink:href=\"#Arrow-right\"/></svg></button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</section>\r\n\r\n\r\n</article>\r\n"

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__ = __webpack_require__("./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(companyService) {
        this.companyService = companyService;
        this.config_a = {
            slidesPerView: 4,
            spaceBetween: 30,
            observer: true,
            navigation: {
                nextEl: '.ol-next-c',
                prevEl: '.ol-prev-c'
            },
            scrollbar: {
                el: '.swiper-scrollbar-c',
                hide: false
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 1
                }
            }
        };
        this.config_b = {
            slidesPerView: 3,
            spaceBetween: 30,
            observer: true,
            navigation: {
                nextEl: '.ol-next-p',
                prevEl: '.ol-prev-p'
            },
            scrollbar: {
                el: '.swiper-scrollbar-p',
                hide: false
            },
            breakpoints: {
                1200: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 1
                }
            }
        };
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyService.getCompanies().subscribe(function (comps) {
            _this.clients = comps.client;
            _this.partners = comps.partner;
            // this.swiperView.update();
            // this.swiperView.setIndex(0);
            // console.log(comps);
        });
    };
    ClientsComponent.prototype.ngAfterViewInit = function () {
        // this.swipers.changes.subscribe((r)=>{
        //   this.swipers.forEach((swiper)=>{
        //     // swiper.setIndex(0);
        //     setTimeout(swiper.setIndex(0),450);
        //     console.log('yep');
        //   });
        // });
        // setTimeout(()=>this.swiper1.setIndex(0),450);
        // setTimeout(()=>this.swiper2.setIndex(0),450);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ClientsComponent.prototype, "clients", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ClientsComponent.prototype, "partners", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('swiper1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["b" /* SwiperDirective */])
    ], ClientsComponent.prototype, "swiper1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('swiper2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["b" /* SwiperDirective */])
    ], ClientsComponent.prototype, "swiper2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["b" /* SwiperDirective */]),
        __metadata("design:type", Object)
    ], ClientsComponent.prototype, "swipers", void 0);
    ClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clients',
            template: __webpack_require__("./src/app/clients/clients.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
        this.companyUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].resource + "/company";
    }
    /** GET companies from the server */
    CompanyService.prototype.getCompanies = function () {
        return this.http.get(this.companyUrl);
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this.mailUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].server + "/admin-ajax.php";
        this.pageUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].resource + "/contacts";
    }
    /** POST message to wp mailer */
    ContactService.prototype.sendMail = function (data) {
        return this.http.post(this.mailUrl, data);
    };
    /** GET contacts page content */
    ContactService.prototype.getContent = function () {
        return this.http.get(this.pageUrl);
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"page page-contacts\">\r\n\r\n  <div class=\"row row-contacts\">\r\n\r\n    <div class=\"contacts__col-left contacts__col\">\r\n      <div class=\"contact__page-content\" [innerHTML]=\"content | safe: 'html'\"></div>\r\n\r\n      <div [hidden]=\"submitted\" class=\"form-wrapper\">\r\n\r\n        <form class=\"contacts__form\" (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\r\n\r\n          <h2 class=\"contacts__form-heading\">Обратная связь</h2>\r\n\r\n          <div class=\"contacts__input-wrap\">\r\n            <input  type=\"text\" class=\"contacts__input\" placeholder=\"Ваше имя\"\r\n            required minlength=\"2\"\r\n            [(ngModel)]=\"model.name\" name=\"name\" #nameVar=\"ngModel\">\r\n            <div *ngIf=\"nameVar.invalid && (nameVar.dirty || nameVar.touched)\" class=\"contacts__invalid\">\r\n              <div *ngIf=\"nameVar.errors.required\">\r\n                Заполните имя.\r\n              </div>\r\n              <div *ngIf=\"nameVar.errors.minlength\">\r\n                Имя должно быть не менее 2х символов.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"contacts__input-wrap\">\r\n            <input  type=\"email\" class=\"contacts__input\" placeholder=\"Email\"\r\n            required\r\n            [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\">\r\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"contacts__invalid\">\r\n              <div *ngIf=\"email.errors.required\">\r\n                Заполните email.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"contacts__input-wrap\">\r\n            <input  type=\"text\" class=\"contacts__input\" placeholder=\"Сообщение\"\r\n            required\r\n            [(ngModel)]=\"model.message\" name=\"message\" #message=\"ngModel\">\r\n            <div *ngIf=\"message.invalid && (message.dirty || message.touched)\" class=\"contacts__invalid\">\r\n              <div *ngIf=\"message.errors.required\">\r\n                Заполните сообщение.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <button type=\"submit\" class=\"contacts__submit\"\r\n          [disabled]=\"!heroForm.form.valid\">отправить</button>\r\n\r\n        </form>\r\n      </div>\r\n\r\n      <div [hidden]=\"!submitted\">\r\n\r\n        <p>Сообщение отправлено</p>\r\n        <p>{{response}}</p>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"contacts__col-right contacts__col\">\r\n      <!-- google map here -->\r\n      <div #gmap class=\"gmap-placeholder\"></div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</article>\r\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_service__ = __webpack_require__("./src/app/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Message } from '../message';

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(contact) {
        this.contact = contact;
        this.model = {};
        // model = new Message('Bob', 'peace@off.org', 'I wish angular css sourcemaps issue would be fixed');
        this.submitted = false;
        this.styles = [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": "7"
                    },
                    {
                        "gamma": "1.37"
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#199bd7"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ];
    }
    ContactsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // if (this.myform.valid) {
        this.model.action = "notify";
        // console.log(this.model);
        this.contact.sendMail(this.model).subscribe(function (res) {
            // console.log(res);
            _this.status = res;
        });
        // }
    };
    Object.defineProperty(ContactsComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactsComponent.prototype, "response", {
        get: function () { return JSON.stringify(this.status); },
        enumerable: true,
        configurable: true
    });
    // constructor( private contact: ContactService ) {}
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contact.getContent().subscribe(function (res) { return _this.content = res.content; });
        var mapProp = {
            center: new google.maps.LatLng(43.116101, 131.879411),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.map.setOptions({ styles: this.styles });
        var svg = '/assets/img/mapmarker.svg';
        var marker0 = new google.maps.Marker({
            position: { lat: 43.116101, lng: 131.879411 },
            icon: svg,
            map: this.map
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('gmap'),
        __metadata("design:type", Object)
    ], ContactsComponent.prototype, "gmapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContactsComponent.prototype, "content", void 0);
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__("./src/app/contacts/contacts.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/docs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var DocsService = /** @class */ (function () {
    function DocsService(http) {
        this.http = http;
        this.propertyUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].resource + "/document";
    }
    /** GET documents */
    DocsService.prototype.getDocuments = function () {
        return this.http.get(this.propertyUrl);
    };
    DocsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DocsService);
    return DocsService;
}());



/***/ }),

/***/ "./src/app/docs/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"docs-popup-fade\" [ngClass]=\"{visible:popup.active}\">\r\n  <div class=\"container docs-popup\">\r\n\r\n    <button (click)=\"close()\" class=\"modal-close\">\r\n      Закрыть\r\n    </button>\r\n\r\n    <img [src]=\"popup.src\" [srcset]=\"popup.srcset\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<article class=\"page page-docs\">\r\n\r\n  <h1 class=\"article-heading\">разрешительная документация</h1>\r\n\r\n  <div #swiper class=\"swiper-container docs\" [swiper]=\"config\">\r\n    <div class=\"swiper-wrapper\">\r\n\r\n      <div class=\"docs__item swiper-slide\" *ngFor=\"let doc of docs; let i = index\">\r\n        <span class=\"doc-num\">{{i + 1 | number:'2.0-0'}}</span>\r\n        <div class=\"docs__img-wrap\" (click)=\"showModal(doc.thumb, doc.srcset)\">\r\n          <img [src]=\"doc.thumb\"/>\r\n        </div>\r\n        <div class=\"docs__item-content\">\r\n          <h4 class=\"docs__name\">\r\n            {{doc.name}}\r\n          </h4>\r\n          <a href=\"{{doc.file}}\" class=\"docs__link\">{{doc.size}}</a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div> <!-- swiper end -->\r\n\r\n  <div class=\"docs__controls\">\r\n      <button class=\"sc ol ol-prev arrw-hor\"><svg><use xlink:href=\"#Arrow-left\"/></svg></button>\r\n      <div class=\"swiper-scrollbar docs\"></div>\r\n      <button class=\"sc ol ol-next arrw-hor\"><svg><use xlink:href=\"#Arrow-right\"/></svg></button>\r\n  </div>\r\n\r\n</article>\r\n"

/***/ }),

/***/ "./src/app/docs/docs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__docs_service__ = __webpack_require__("./src/app/docs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocsComponent = /** @class */ (function () {
    function DocsComponent(docService) {
        this.docService = docService;
        this.popup = {
            active: false,
            src: "",
            srcset: ""
        };
        this.config = {
            slidesPerView: 2,
            slidesPerColumn: 2,
            // spaceBetween: 30,
            observer: true,
            navigation: {
                nextEl: '.ol-next',
                prevEl: '.ol-prev'
            },
            scrollbar: {
                el: '.swiper-scrollbar'
            },
            breakpoints: {
                1200: { slidesPerView: 1 }
            }
        };
    }
    // this one `closes` the modal
    DocsComponent.prototype.close = function () {
        this.popup.active = false;
    };
    // close modal on esc
    DocsComponent.prototype.closeOnEsc = function (e) {
        // console.log(e);
        if (e.keyCode == 27)
            this.close();
    };
    // slidesPerColumn can't be changed from the breakpoints
    // here's a little workaround
    DocsComponent.prototype.setSlidesPerColumn = function () {
        // console.log(window.innerWidth);
        if (window.innerWidth <= 600) {
            this.config.slidesPerColumn = 1;
        }
    };
    DocsComponent.prototype.showModal = function (src, srcset) {
        this.popup.active = true;
        this.popup.src = src;
        this.popup.srcset = srcset;
    };
    DocsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.docService.getDocuments().subscribe(function (docs) {
            _this.docs = docs;
        });
        this.setSlidesPerColumn();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DocsComponent.prototype, "docs", void 0);
    DocsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-docs',
            template: __webpack_require__("./src/app/docs/docs.component.html"),
            // styleUrls: ['./docs.component.css']
            host: {
                '(window:resize)': 'setSlidesPerColumn()',
                '(window:keydown)': 'closeOnEsc($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__docs_service__["a" /* DocsService */]])
    ], DocsComponent);
    return DocsComponent;
}());



/***/ }),

/***/ "./src/app/dom.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DomService = /** @class */ (function () {
    function DomService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    DomService.prototype.appendComponentTo = function (parentId, child, childConfig) {
        // Create a component reference from the component
        var childComponentRef = this.componentFactoryResolver
            .resolveComponentFactory(child)
            .create(this.injector);
        // Attach the config tothe child (inputs and outputs)
        this.attachConfig(childConfig, childComponentRef);
        this.childComponentRef = childComponentRef;
        // Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(childComponentRef.hostView);
        // Get DOM element from component
        var childDomElem = childComponentRef.hostView
            .rootNodes[0];
        // Append DOM element to the body
        document.getElementById(parentId).appendChild(childDomElem);
    };
    DomService.prototype.removeComponent = function () {
        this.appRef.detachView(this.childComponentRef.hostView);
        this.childComponentRef.destroy();
    };
    DomService.prototype.attachConfig = function (config, componentRef) {
        var inputs = config.inputs;
        var outputs = config.outputs;
        for (var key in inputs) {
            componentRef.instance[key] = inputs[key];
        }
        for (var key in outputs) {
            componentRef.instance[key] = outputs[key];
        }
    };
    DomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], DomService);
    return DomService;
}());

// interface childConfig{
//   inputs:object,
//   outputs:object
// }


/***/ }),

/***/ "./src/app/fade.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
// fade.animation.ts

var fadeAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fadeAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* query */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* query */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }))
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* query */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 }))
        ], { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- component template -->\r\n\r\n\r\n<article class=\"page homepage\">\r\n\r\n  <div [swiper]=\"config\" class=\"swiper-container slides\">\r\n    <div class=\"swiper-wrapper\">\r\n\r\n      <div class=\"slider__item swiper-slide\" *ngFor=\"let slide of slides\">\r\n        <div class=\"hs-image-wrap\">\r\n          <img class=\"hs-image\" [src]=\"slide.img\" [srcset]=\"slide.srcset\" sizes=\"57vw\">          \r\n        </div>\r\n        <div class=\"hs-content\">\r\n          <h1 class=\"hs-name\">{{slide.name}}</h1>\r\n          <br>\r\n          <h3 class=\"hs-client\">{{slide.client}}</h3>\r\n        </div>\r\n        <a routerLink=\"/property/{{slide.link}}\" class=\"hs-link\">смотреть проект</a>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"olist__controls home\">\r\n      <button class=\"sc ol ol-prev arrw-hor\"><svg><use xlink:href=\"#Arrow-left\"/></svg></button>\r\n      <div class=\"hs-controls-inner\">\r\n        <span class=\"sc-num-l sc-num\">01</span>\r\n        <div class=\"swiper-scrollbar home\"></div>\r\n        <span class=\"sc-num-r sc-num\">03</span>\r\n      </div>\r\n      <button class=\"sc ol ol-next  arrw-hor\"><svg><use xlink:href=\"#Arrow-right\"/></svg></button>\r\n  </div>\r\n\r\n</article>\r\n\r\n<!-- component template end -->\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide_service__ = __webpack_require__("./src/app/slide.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(slideService) {
        this.slideService = slideService;
        this.config = {
            initialSlide: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 32,
            // loop: true,
            observer: true,
            navigation: {
                nextEl: '.ol-next',
                prevEl: '.ol-prev'
            },
            scrollbar: {
                el: '.swiper-scrollbar'
            }
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slideService.getSlides().subscribe(function (slides) {
            _this.slides = slides;
            // console.log(slides);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "slides", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__slide_service__["a" /* SlideService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modal-prop/modal-prop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container popup-container\">\r\n\r\n  <button (click)=\"close()\" class=\"modal-close\">\r\n    Закрыть\r\n  </button>\r\n\r\n  <div class=\"popup-swiper-wrapper\">\r\n    <swiper #swiperPropModal [config]=\"swiperCfg\" class=\"object__slider propmodal\"\r\n    (indexChange)=\"onIndexChange($event)\" [index]=\"index - 1\">\r\n      <!-- <div class=\"swiper-wrapper\"> -->\r\n        <li *ngFor=\"let img of images\" class=\"swiper-slide propmodal\">\r\n          <img [src]=\"img.src\" [srcset]=\"img.srcset\" class=\"popup-img\"/>\r\n        </li>\r\n      <!-- </div> -->\r\n    </swiper>\r\n  </div>\r\n\r\n  <div class=\"oject__slider-controls popup-controls\">\r\n    <button class=\"sc sc-prev\"><svg><use xlink:href=\"#Arrow-top\"/></svg></button>\r\n    <span class=\"sc-num sc-num-min\">01</span>\r\n    <span id=\"sc-sep\"></span>\r\n    <span class=\"sc-num sc-faded\">{{index | number:'2.0-0'}}</span>\r\n    <span class=\"sc-num sc-num-max\">{{total | number:'2.0-0'}}</span>\r\n    <button class=\"sc sc-next\"><svg><use xlink:href=\"#Arrow-down\"/></svg></button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modal-prop/modal-prop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_service__ = __webpack_require__("./src/app/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalPropComponent = /** @class */ (function () {
    // index = 0o1;
    function ModalPropComponent(modalService) {
        this.modalService = modalService;
        this.swiperCfg = {
            direction: 'vertical',
            slidesPerView: 1,
            observer: true,
            mousewheel: true,
            navigation: {
                nextEl: '.sc-next',
                prevEl: '.sc-prev'
            }
        };
    }
    ModalPropComponent.prototype.ngOnInit = function () {
    };
    ModalPropComponent.prototype.close = function () {
        this.modalService.destroy();
    };
    ModalPropComponent.prototype.onIndexChange = function (index) {
        // console.log('Swiper index: ', index);
        this.index = index + 1;
    };
    ModalPropComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modal-prop',
            template: __webpack_require__("./src/app/modal-prop/modal-prop.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__modal_service__["a" /* ModalService */]])
    ], ModalPropComponent);
    return ModalPropComponent;
}());



/***/ }),

/***/ "./src/app/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_service__ = __webpack_require__("./src/app/dom.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalService = /** @class */ (function () {
    function ModalService(domService) {
        this.domService = domService;
        this.modalElementId = 'modal-container';
        this.overlayElementId = 'overlay';
    }
    ModalService.prototype.init = function (component, inputs, outputs) {
        var componentConfig = {
            inputs: inputs,
            outputs: outputs
        };
        this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
        document.getElementById(this.modalElementId).className = 'show';
        document.getElementById(this.overlayElementId).className = 'show';
    };
    ModalService.prototype.destroy = function () {
        this.domService.removeComponent();
        document.getElementById(this.modalElementId).className = 'hidden';
        document.getElementById(this.overlayElementId).className = 'hidden';
    };
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dom_service__["a" /* DomService */]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"page page-objects\">\r\n\r\n  <!-- <a (click)=\"swupdate()\">обновить</a> -->\r\n\r\n  <div class=\"swiper-outer-wrap projects\">\r\n    <div #swiperView [swiper]=\"config\" class=\"swiper objects swiper-container\" id=\"objects_slider\" >\r\n\r\n      <div class=\"swiper-wrapper\">\r\n\r\n        <div class=\"olist__item swiper-slide\"\r\n        *ngFor=\"let project of projects; let i = index\"\r\n        routerLink=\"/property/{{project.id}}\" >\r\n          <span class=\"oi-num\">{{i + 1 | number:'2.0-0'}}</span>\r\n          <div class=\"oi-content\">\r\n            <div class=\"oi-text\">\r\n              <h2 class=\"oi-heading\">{{project.name}}</h2>\r\n              <h3 class=\"oi-client\">{{project.client}}</h3>\r\n            </div>\r\n            <img class=\"oi-thumb\" [src]=\"project?.thumb\" [srcset]=\"project?.srcset\">\r\n          </div>\r\n          <a routerLink=\"/property/{{project.id}}\" class=\"oi-link\">смотреть проект</a>\r\n        </div>\r\n\r\n      </div>\r\n\r\n   </div>\r\n  </div>\r\n\r\n</article>\r\n\r\n<div class=\"olist__controls project\">\r\n  <button class=\"sc ol ol-prev\"><svg><use xlink:href=\"#Arrow-left\"/></svg></button>\r\n  <div class=\"swiper-scrollbar projects\"></div>\r\n  <button class=\"sc ol ol-next\"><svg><use xlink:href=\"#Arrow-right\"/></svg></button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__ = __webpack_require__("./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__property_service__ = __webpack_require__("./src/app/property.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(propertyService) {
        this.propertyService = propertyService;
        this.config = {
            initialSlide: 0,
            slidesPerView: 4,
            // slidesPerGroup: 4,
            spaceBetween: 32,
            observer: true,
            loop: false,
            updateOnImagesReady: true,
            navigation: {
                nextEl: '.ol-next',
                prevEl: '.ol-prev'
            },
            scrollbar: {
                el: '.swiper-scrollbar'
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                },
                900: {
                    slidesPerView: 2,
                },
                600: {
                    slidesPerView: 1
                }
            }
        };
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProperties();
    };
    ProjectsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('ngAfterViewInit');
        setTimeout(function () {
            _this.swiperView.setIndex(0);
            window.dispatchEvent(new Event('resize'));
        }, 1000);
    };
    ProjectsComponent.prototype.getProperties = function () {
        var _this = this;
        this.propertyService.getProperties().subscribe(function (props) {
            _this.projects = props;
            // sad, but following does nothing
            _this.swiperView.update();
            window.dispatchEvent(new Event('resize'));
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ProjectsComponent.prototype, "projects", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["b" /* SwiperDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_swiper_wrapper__["b" /* SwiperDirective */])
    ], ProjectsComponent.prototype, "swiperView", void 0);
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/projects/projects.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__property_service__["a" /* PropertyService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/property.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var PropertyService = /** @class */ (function () {
    function PropertyService(http) {
        this.http = http;
        this.propertyUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].resource + "/object";
    }
    /** GET objects from the server */
    PropertyService.prototype.getProperties = function () {
        return this.http.get(this.propertyUrl);
    };
    /** GET object by id. */
    PropertyService.prototype.getProperty = function (id) {
        var url = this.propertyUrl + "/" + id;
        return this.http.get(url);
    };
    PropertyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PropertyService);
    return PropertyService;
}());



/***/ }),

/***/ "./src/app/property.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Property; });
var Property = /** @class */ (function () {
    function Property() {
    }
    return Property;
}());



/***/ }),

/***/ "./src/app/property/property.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"page page-object\">\r\n    <div class=\"object__text\">\r\n      <div class=\"object__text-inner\">\r\n\r\n        <div class=\"object__headings\">\r\n          <h2 class=\"object__heading\">{{property?.title}}</h2>\r\n          <h3 class=\"object__client\">Заказчик: {{property?.client}}</h3>\r\n        </div>\r\n\r\n        <perfect-scrollbar [config]=\"swiperCfg\" id=\"psoc\">\r\n          <div class=\"object__content\" [innerHTML]=\"property?.content\"></div>\r\n        </perfect-scrollbar>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"object__slider-wrap\">\r\n\r\n      <div #swiperView [swiper]=\"swiperCfg\" class=\"object__slider\" id=\"object__slider\"\r\n      (indexChange)=\"onIndexChange($event)\" [index]=\"0\">\r\n        <div class=\"swiper-wrapper\">\r\n          <li *ngFor=\"let img of images\" class=\"swiper-slide property\" (click)=\"openModal()\">\r\n            <img [src]=\"img.src\"/>\r\n          </li>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"oject__slider-controls\">\r\n        <button class=\"sc sc-prev\"><svg><use xlink:href=\"#Arrow-top\"/></svg></button>\r\n        <span class=\"sc-num sc-num-min\">01</span>\r\n        <span id=\"sc-sep\"></span>\r\n        <span class=\"sc-num sc-faded\">{{index | number:'2.0-0'}}</span>\r\n        <span class=\"sc-num sc-num-max\">{{total | number:'2.0-0'}}</span>\r\n        <button class=\"sc sc-next\"><svg><use xlink:href=\"#Arrow-down\"/></svg></button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n</article>\r\n\r\n<footer class=\"object__footer\">\r\n  <!-- <a (click)=\"anew($event)\">go to 0</a> -->\r\n  <a routerLink=\"/projects/\" class=\"object__back\">вернуться к списку</a>\r\n  <div class=\"footer-controls\">\r\n    <a class=\"fc fc-prev\" [routerLink]=\"prev\" (click)=\"resetIndex()\"><svg><use xlink:href=\"#Arrow-left\"/></svg><span>предыдущий проект</span></a>\r\n    <a class=\"fc fc-next\" [routerLink]=\"next\" (click)=\"resetIndex()\"><span>следующий проект</span><svg><use xlink:href=\"#Arrow-right\"/></svg></a>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/property/property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property__ = __webpack_require__("./src/app/property.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_service__ = __webpack_require__("./src/app/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_service__ = __webpack_require__("./src/app/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_swiper_wrapper__ = __webpack_require__("./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_prop_modal_prop_component__ = __webpack_require__("./src/app/modal-prop/modal-prop.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PropertyComponent = /** @class */ (function () {
    function PropertyComponent(route, propertyService, location, modalService) {
        var _this = this;
        this.route = route;
        this.propertyService = propertyService;
        this.location = location;
        this.modalService = modalService;
        this.index = 1;
        this.IDs = [];
        this.swiperCfg = {
            direction: 'vertical',
            slidesPerView: 1,
            observer: true,
            mousewheel: true,
            navigation: {
                nextEl: '.sc-next',
                prevEl: '.sc-prev'
            }
        };
        route.params.subscribe(function (val) {
            _this.getProperty();
            _this.setPrevNextLink();
            // this.test = 0; //reset swiper position
        });
    }
    PropertyComponent.prototype.setDirection = function () {
        if (window.innerWidth <= 600) {
            this.swiperCfg.direction = 'horizontal';
        }
    };
    PropertyComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getProperty();
        this.setPrevNextLink();
        this.setDirection();
    };
    PropertyComponent.prototype.openModal = function () {
        // modal service
        var params = {
            images: this.images,
            index: this.index,
            total: this.total,
            test: 3
        };
        this.modalService.init(__WEBPACK_IMPORTED_MODULE_7__modal_prop_modal_prop_component__["a" /* ModalPropComponent */], params, {});
    };
    PropertyComponent.prototype.resetIndex = function () {
        this.swiperView.setIndex(0);
    };
    PropertyComponent.prototype.getProperty = function () {
        var _this = this;
        // console.log(this.route);
        this.id = +this.route.snapshot.paramMap.get('id');
        this.propertyService.getProperty(this.id)
            .subscribe(function (property) {
            _this.property = property;
            _this.images = property.attachments;
            _this.total = property.attachments.length;
        });
    };
    PropertyComponent.prototype.setPrevNextLink = function () {
        var _this = this;
        this.propertyService.getProperties().subscribe(function (props) {
            _this.props = props;
            // console.log(props);
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                // console.log(prop.id);
                _this.IDs.push(prop.id);
            }
            var index = _this.IDs.findIndex(function (el) { return el == _this.id; });
            var n = index + 1;
            var p = index - 1;
            _this.next = '/property/' + _this.IDs[n];
            _this.prev = '/property/' + _this.IDs[p];
            // console.log('next',this.next,'prev',this.prev);
        });
    };
    PropertyComponent.prototype.onIndexChange = function (index) {
        // console.log('Swiper index: ', index);
        this.index = index + 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__property__["a" /* Property */])
    ], PropertyComponent.prototype, "property", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PropertyComponent.prototype, "images", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PropertyComponent.prototype, "prev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PropertyComponent.prototype, "next", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6_ngx_swiper_wrapper__["b" /* SwiperDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ngx_swiper_wrapper__["b" /* SwiperDirective */])
    ], PropertyComponent.prototype, "swiperView", void 0);
    PropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-property',
            template: __webpack_require__("./src/app/property/property.component.html"),
            // styleUrls: ['./property.component.css'],
            host: {
                '(window:resize)': 'setDirection()'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__property_service__["a" /* PropertyService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__modal_service__["a" /* ModalService */]])
    ], PropertyComponent);
    return PropertyComponent;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var routerTransition = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routerAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* <=> *', [
        // Initial state of new route
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // position: 'absolute',
            // width:'100%',
            // transform: 'translateX(-100%)',
            opacity: 0
        }), { optional: true }),
        // move page off screen right on leave
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // position: 'absolute',
            // width:'100%',
            // transform: 'translateX(100%)',
            opacity: 0
        })), { optional: true }),
        // move page in screen from left to right
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // position: 'absolute',
            opacity: 1,
        })), { optional: true }),
    ])
]);


/***/ }),

/***/ "./src/app/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/slide.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var SlideService = /** @class */ (function () {
    function SlideService(http) {
        this.http = http;
        this.slideUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].resource + "/slide";
    }
    /** GET objects from the server */
    SlideService.prototype.getSlides = function () {
        return this.http.get(this.slideUrl);
    };
    SlideService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SlideService);
    return SlideService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    server: "http://cms.ckzenit.ru",
    // server: "http://localhost:8085",
    // resource: "http://localhost:8085/wp-json/ckz/v1",
    get resource() {
        return this.server + '/wp-json/ckz/v1';
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map