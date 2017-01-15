webpackJsonp([0,3],{

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
/* unused harmony export Grade */
/* unused harmony export round */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.gradeScale = 4.0;
        this.grades = [
            new Grade('A', 100, 90, 4),
            new Grade('B', 90, 80, 3),
            new Grade('C', 80, 70, 2),
            new Grade('D', 70, 60, 1),
            new Grade('F', 0, 60, 0),
        ];
    }
    Object.defineProperty(AppComponent.prototype, "totalCredits", {
        get: function () {
            return this.curCredits + this.futCredits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "curGPA", {
        get: function () {
            return round(this.curGradepoints / this.curCredits, 4);
        },
        set: function (val) {
            if (this.curCredits) {
                this.curGradepoints = round(this.curCredits * val, 4);
            }
            else if (this.curGradepoints) {
                this.curCredits = round(this.curGradepoints / val, 4);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "maxGradepoints", {
        get: function () {
            return this.curGradepoints + this.futCredits * this.gradeScale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "maxGPA", {
        get: function () {
            return round(this.maxGradepoints / this.totalCredits, 4);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "minGPA", {
        get: function () {
            return round(this.curGradepoints / this.totalCredits, 4);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnChanges = function (changes) {
        this.updateGraphData();
    };
    AppComponent.prototype.updateGraphData = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(738),
            styles: [__webpack_require__(736)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
var Grade = (function () {
    function Grade(name, low, high, gradePoints) {
        this.name = name;
        this.low = low;
        this.high = high;
        this.gradePoints = gradePoints;
    }
    return Grade;
}());
function round(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
}
//# sourceMappingURL=C:/sync/Development/foursee/simpleGPACalc/src/app.component.js.map

/***/ },

/***/ 433:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 433;


/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(576);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=C:/sync/Development/foursee/simpleGPACalc/src/main.js.map

/***/ },

/***/ 574:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_material_components_data_table__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_material_components_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_material_components_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gpa_table_gpa_table_component__ = __webpack_require__(575);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
        console.log('AppModule');
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__gpa_table_gpa_table_component__["a" /* GpaTableComponent */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_material_components_data_table__["MdDataTable"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["MaterialModule"].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/sync/Development/foursee/simpleGPACalc/src/app.module.js.map

/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GpaTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GpaTableComponent = (function () {
    function GpaTableComponent() {
        this.totCredits = 0;
        this.curCredits = 0;
        this.curGradepoints = 0;
        this.maxGP = 0;
        this.gpa = [];
        this.thresholds = [];
        var gpa = 4.0;
        while (gpa > 0) {
            this.gpa.push(round(gpa, 2));
            gpa -= 0.1;
        }
    }
    GpaTableComponent.prototype.ngOnInit = function () {
    };
    GpaTableComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.maxGP = round((this.gpa[0] * (this.totCredits - this.curCredits)) + this.curGradepoints, 2);
        this.thresholds = this.gpa.map(function (val) {
            var gp = round(val * _this.totCredits, 2);
            return {
                gpa: val,
                gradePoints: gp,
                gradePointsNeeded: round(Math.max(0, gp - _this.curGradepoints), 2),
                canLoseGradePoints: round((_this.maxGP - gp), 2),
                attainable: _this.maxGP >= gp,
                guarenteed: _this.curGradepoints >= gp
            };
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], GpaTableComponent.prototype, "totCredits", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], GpaTableComponent.prototype, "curCredits", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], GpaTableComponent.prototype, "curGradepoints", void 0);
    GpaTableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gpa-table',
            template: __webpack_require__(739),
            styles: [__webpack_require__(737), __webpack_require__(735), __webpack_require__(734)]
        }), 
        __metadata('design:paramtypes', [])
    ], GpaTableComponent);
    return GpaTableComponent;
}());
function round(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
}
//# sourceMappingURL=C:/sync/Development/foursee/simpleGPACalc/src/gpa-table.component.js.map

/***/ },

/***/ 576:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(574);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=C:/sync/Development/foursee/simpleGPACalc/src/index.js.map

/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/sync/Development/foursee/simpleGPACalc/src/environment.js.map

/***/ },

/***/ 578:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/sync/Development/foursee/simpleGPACalc/src/polyfills.js.map

/***/ },

/***/ 736:
/***/ function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n.md-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n[md-ripple] {\n  overflow: hidden; }\n\n[md-ripple].mdRippleUnbounded {\n  overflow: visible; }\n\n.md-ripple-background {\n  background-color: rgba(0, 0, 0, 0.0588);\n  opacity: 0;\n  -webkit-transition: opacity 300ms linear;\n  transition: opacity 300ms linear;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.mdRippleUnbounded .md-ripple-background {\n  display: none; }\n\n.md-ripple-background.md-ripple-active {\n  opacity: 1; }\n\n.mdRippleFocused .md-ripple-background {\n  opacity: 1; }\n\n.md-ripple-foreground {\n  background-color: rgba(0, 0, 0, 0.0588);\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: 0.25;\n  position: absolute;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1); }\n\n.md-ripple-foreground.md-ripple-fade-in {\n  opacity: 1; }\n\n.md-ripple-foreground.md-ripple-fade-out {\n  opacity: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.mdRippleFocused .md-ripple-background {\n  background-color: rgba(67, 160, 71, 0.1); }\n\n[md-button].md-button-focus.md-primary .md-button-focus-overlay, [md-icon-button].md-button-focus.md-primary .md-button-focus-overlay, [md-raised-button].md-button-focus.md-primary .md-button-focus-overlay, [md-fab].md-button-focus.md-primary .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-primary .md-button-focus-overlay {\n  background-color: rgba(3, 155, 229, 0.12); }\n\n[md-button].md-button-focus.md-accent .md-button-focus-overlay, [md-icon-button].md-button-focus.md-accent .md-button-focus-overlay, [md-raised-button].md-button-focus.md-accent .md-button-focus-overlay, [md-fab].md-button-focus.md-accent .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-accent .md-button-focus-overlay {\n  background-color: rgba(67, 160, 71, 0.12); }\n\n[md-button].md-button-focus.md-warn .md-button-focus-overlay, [md-icon-button].md-button-focus.md-warn .md-button-focus-overlay, [md-raised-button].md-button-focus.md-warn .md-button-focus-overlay, [md-fab].md-button-focus.md-warn .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-warn .md-button-focus-overlay {\n  background-color: rgba(229, 57, 53, 0.12); }\n\n[md-button], [md-icon-button] {\n  background: transparent; }\n  [md-button].md-primary, [md-icon-button].md-primary {\n    color: #039be5; }\n  [md-button].md-accent, [md-icon-button].md-accent {\n    color: #43a047; }\n  [md-button].md-warn, [md-icon-button].md-warn {\n    color: #e53935; }\n  [md-button].md-primary[disabled], [md-button].md-accent[disabled], [md-button].md-warn[disabled], [md-button][disabled][disabled], [md-icon-button].md-primary[disabled], [md-icon-button].md-accent[disabled], [md-icon-button].md-warn[disabled], [md-icon-button][disabled][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n  [md-button]:hover.md-primary .md-button-focus-overlay, [md-icon-button]:hover.md-primary .md-button-focus-overlay {\n    background-color: rgba(3, 155, 229, 0.12); }\n  [md-button]:hover.md-accent .md-button-focus-overlay, [md-icon-button]:hover.md-accent .md-button-focus-overlay {\n    background-color: rgba(67, 160, 71, 0.12); }\n  [md-button]:hover.md-warn .md-button-focus-overlay, [md-icon-button]:hover.md-warn .md-button-focus-overlay {\n    background-color: rgba(229, 57, 53, 0.12); }\n\n[md-raised-button], [md-fab], [md-mini-fab] {\n  background-color: #303030; }\n  [md-raised-button].md-primary, [md-fab].md-primary, [md-mini-fab].md-primary {\n    color: white; }\n  [md-raised-button].md-accent, [md-fab].md-accent, [md-mini-fab].md-accent {\n    color: white; }\n  [md-raised-button].md-warn, [md-fab].md-warn, [md-mini-fab].md-warn {\n    color: white; }\n  [md-raised-button].md-primary[disabled], [md-raised-button].md-accent[disabled], [md-raised-button].md-warn[disabled], [md-raised-button][disabled][disabled], [md-fab].md-primary[disabled], [md-fab].md-accent[disabled], [md-fab].md-warn[disabled], [md-fab][disabled][disabled], [md-mini-fab].md-primary[disabled], [md-mini-fab].md-accent[disabled], [md-mini-fab].md-warn[disabled], [md-mini-fab][disabled][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n  [md-raised-button].md-primary, [md-fab].md-primary, [md-mini-fab].md-primary {\n    background-color: #039be5; }\n  [md-raised-button].md-accent, [md-fab].md-accent, [md-mini-fab].md-accent {\n    background-color: #43a047; }\n  [md-raised-button].md-warn, [md-fab].md-warn, [md-mini-fab].md-warn {\n    background-color: #e53935; }\n  [md-raised-button].md-primary[disabled], [md-raised-button].md-accent[disabled], [md-raised-button].md-warn[disabled], [md-raised-button][disabled][disabled], [md-fab].md-primary[disabled], [md-fab].md-accent[disabled], [md-fab].md-warn[disabled], [md-fab][disabled][disabled], [md-mini-fab].md-primary[disabled], [md-mini-fab].md-accent[disabled], [md-mini-fab].md-warn[disabled], [md-mini-fab][disabled][disabled] {\n    background-color: rgba(255, 255, 255, 0.12); }\n\n[md-fab], [md-mini-fab] {\n  background-color: #43a047;\n  color: white; }\n\n.md-button-toggle-checked .md-button-toggle-label-content {\n  background-color: #e0e0e0; }\n\n.md-button-toggle-disabled .md-button-toggle-label-content {\n  background-color: rgba(255, 255, 255, 0.3); }\n\nmd-card {\n  background: #424242;\n  color: white; }\n\nmd-card-subtitle {\n  color: rgba(255, 255, 255, 0.7); }\n\n.md-checkbox-frame {\n  border-color: rgba(255, 255, 255, 0.7); }\n\n.md-checkbox-checkmark {\n  fill: #303030; }\n\n.md-checkbox-checkmark-path {\n  stroke: #303030 !important; }\n\n.md-checkbox-mixedmark {\n  background-color: #303030; }\n\n.md-checkbox-indeterminate.md-primary .md-checkbox-background, .md-checkbox-checked.md-primary .md-checkbox-background {\n  background-color: #03a9f4; }\n\n.md-checkbox-indeterminate.md-accent .md-checkbox-background, .md-checkbox-checked.md-accent .md-checkbox-background {\n  background-color: #4caf50; }\n\n.md-checkbox-indeterminate.md-warn .md-checkbox-background, .md-checkbox-checked.md-warn .md-checkbox-background {\n  background-color: #f44336; }\n\n.md-checkbox-disabled.md-checkbox-checked .md-checkbox-background, .md-checkbox-disabled.md-checkbox-indeterminate .md-checkbox-background {\n  background-color: #686868; }\n\n.md-checkbox-disabled:not(.md-checkbox-checked) .md-checkbox-frame {\n  border-color: #686868; }\n\n.md-checkbox:not(.md-checkbox-disabled).md-primary .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(3, 155, 229, 0.26); }\n\n.md-checkbox:not(.md-checkbox-disabled).md-accent .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(67, 160, 71, 0.26); }\n\n.md-checkbox:not(.md-checkbox-disabled).md-warn .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(229, 57, 53, 0.26); }\n\n.md-chip:not(.md-basic-chip) {\n  background-color: #424242;\n  color: white; }\n\n.md-chip.md-chip-selected:not(.md-basic-chip) {\n  background-color: #212121;\n  color: white; }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-primary {\n    background-color: #03a9f4;\n    color: white; }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-accent {\n    background-color: #4caf50;\n    color: white; }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-warn {\n    background-color: #f44336;\n    color: white; }\n\nmd-dialog-container {\n  background: #424242; }\n\nmd-icon.md-primary {\n  color: #039be5; }\n\nmd-icon.md-accent {\n  color: #43a047; }\n\nmd-icon.md-warn {\n  color: #e53935; }\n\n.md-input-placeholder {\n  color: rgba(255, 255, 255, 0.3); }\n  .md-input-placeholder.md-focused {\n    color: #039be5; }\n    .md-input-placeholder.md-focused.md-accent {\n      color: #43a047; }\n    .md-input-placeholder.md-focused.md-warn {\n      color: #e53935; }\n\ninput.md-input-element:-webkit-autofill + .md-input-placeholder .md-placeholder-required,\n.md-input-placeholder.md-float.md-focused .md-placeholder-required {\n  color: #43a047; }\n\n.md-input-underline {\n  border-color: rgba(255, 255, 255, 0.12); }\n  .md-input-underline .md-input-ripple {\n    background-color: #039be5; }\n    .md-input-underline .md-input-ripple.md-accent {\n      background-color: #43a047; }\n    .md-input-underline .md-input-ripple.md-warn {\n      background-color: #e53935; }\n\nmd-list md-list-item, md-list a[md-list-item], md-nav-list md-list-item, md-nav-list a[md-list-item] {\n  color: white; }\n\nmd-list [md-subheader], md-nav-list [md-subheader] {\n  color: rgba(255, 255, 255, 0.7); }\n\nmd-divider {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n\nmd-nav-list .md-list-item:hover, md-nav-list .md-list-item.md-list-item-focus {\n  background: rgba(255, 255, 255, 0.04); }\n\n.md-menu-content {\n  background: #424242; }\n\n[md-menu-item] {\n  background: transparent;\n  color: white; }\n  [md-menu-item][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n  [md-menu-item] md-icon {\n    color: white; }\n  [md-menu-item]:hover:not([disabled]), [md-menu-item]:focus:not([disabled]) {\n    background: rgba(255, 255, 255, 0.04); }\n\n.md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#b3e5fc%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.md-progress-bar-buffer {\n  background-color: #b3e5fc; }\n\n.md-progress-bar-fill::after {\n  background-color: #039be5; }\n\nmd-progress-bar.md-accent .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#c8e6c9%27%2F%3E%3C%2Fsvg%3E\"); }\n\nmd-progress-bar.md-accent .md-progress-bar-buffer {\n  background-color: #c8e6c9; }\n\nmd-progress-bar.md-accent .md-progress-bar-fill::after {\n  background-color: #43a047; }\n\nmd-progress-bar.md-warn .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\nmd-progress-bar.md-warn .md-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\nmd-progress-bar.md-warn .md-progress-bar-fill::after {\n  background-color: #e53935; }\n\nmd-progress-spinner path, md-progress-circle path, md-spinner path {\n  stroke: #039be5; }\n\nmd-progress-spinner.md-accent path, md-progress-circle.md-accent path, md-spinner.md-accent path {\n  stroke: #43a047; }\n\nmd-progress-spinner.md-warn path, md-progress-circle.md-warn path, md-spinner.md-warn path {\n  stroke: #e53935; }\n\n.md-radio-outer-circle {\n  border-color: rgba(255, 255, 255, 0.7); }\n  .md-radio-checked .md-radio-outer-circle {\n    border-color: #43a047; }\n  .md-radio-disabled .md-radio-outer-circle {\n    border-color: rgba(255, 255, 255, 0.3); }\n\n.md-radio-inner-circle {\n  background-color: #43a047; }\n  .md-radio-disabled .md-radio-inner-circle {\n    background-color: rgba(255, 255, 255, 0.3); }\n\n.md-radio-ripple .md-ripple-foreground {\n  background-color: rgba(67, 160, 71, 0.26); }\n  .md-radio-disabled .md-radio-ripple .md-ripple-foreground {\n    background-color: rgba(255, 255, 255, 0.3); }\n\n.md-select-trigger {\n  color: rgba(255, 255, 255, 0.3);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12); }\n  md-select:focus:not(.md-select-disabled) .md-select-trigger {\n    color: #039be5;\n    border-bottom: 1px solid #039be5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .md-select-trigger {\n    color: #e53935;\n    border-bottom: 1px solid #e53935; }\n\n.md-select-arrow {\n  color: rgba(255, 255, 255, 0.3); }\n  md-select:focus:not(.md-select-disabled) .md-select-arrow {\n    color: #039be5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .md-select-arrow {\n    color: #e53935; }\n\n.md-select-content {\n  background: #424242; }\n\n.md-select-value {\n  color: white; }\n  .md-select-disabled .md-select-value {\n    color: rgba(255, 255, 255, 0.3); }\n\nmd-option:hover:not(.md-option-disabled), md-option:focus:not(.md-option-disabled) {\n  background: rgba(255, 255, 255, 0.04); }\n\nmd-option.md-selected {\n  background: rgba(255, 255, 255, 0.04);\n  color: #039be5; }\n\nmd-option.md-option-disabled {\n  color: rgba(255, 255, 255, 0.3); }\n\n.md-sidenav-container {\n  background-color: #303030;\n  color: white; }\n\nmd-sidenav {\n  background-color: #424242;\n  color: white; }\n  md-sidenav.md-sidenav-push {\n    background-color: #424242; }\n\n.md-sidenav-backdrop.md-sidenav-shown {\n  background-color: rgba(189, 189, 189, 0.6); }\n\nmd-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #a5d6a7; }\n\nmd-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(165, 214, 167, 0.5); }\n\nmd-slide-toggle.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(255, 255, 255, 0.12); }\n\nmd-slide-toggle.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(165, 214, 167, 0.26); }\n\nmd-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #81d4fa; }\n\nmd-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(129, 212, 250, 0.5); }\n\nmd-slide-toggle.md-primary.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(255, 255, 255, 0.12); }\n\nmd-slide-toggle.md-primary.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(129, 212, 250, 0.26); }\n\nmd-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #ef9a9a; }\n\nmd-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(239, 154, 154, 0.5); }\n\nmd-slide-toggle.md-warn.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(255, 255, 255, 0.12); }\n\nmd-slide-toggle.md-warn.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(239, 154, 154, 0.26); }\n\n.md-disabled .md-slide-toggle-thumb {\n  background-color: #424242; }\n\n.md-disabled .md-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.md-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.md-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n.md-slider-track {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.md-slider-track-fill {\n  background-color: #43a047; }\n\n.md-slider-thumb {\n  background-color: #43a047; }\n\n.md-slider-thumb-label {\n  background-color: #43a047; }\n\n.md-slider-thumb-label-text {\n  color: white; }\n\n[md-tab-nav-bar],\n.md-tab-header {\n  border-bottom: 1px solid black; }\n\n.md-tab-label:focus {\n  background-color: rgba(179, 229, 252, 0.3); }\n\nmd-ink-bar {\n  background-color: #03a9f4; }\n\nmd-toolbar {\n  background: #212121;\n  color: white; }\n  md-toolbar.md-primary {\n    background: #039be5;\n    color: white; }\n  md-toolbar.md-accent {\n    background: #43a047;\n    color: white; }\n  md-toolbar.md-warn {\n    background: #e53935;\n    color: white; }\n\n.md-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n.primary-color-bg {\n  background-color: #039be5;\n  color: white; }\n\n.primary-color-fg {\n  color: #039be5; }\n\n.accent-color-bg {\n  background-color: #43a047;\n  color: white; }\n\n.accent-color-fg {\n  color: #43a047; }\n\n.warn-color-bg {\n  background-color: #e53935;\n  color: white; }\n\n.warn-color-fg {\n  color: #e53935; }\n\n.nb-toolbar-small {\n  height: 2em;\n  min-height: 2rem;\n  margin-bottom: 1rem; }\n  .nb-toolbar-small .md-toolbar-layout,\n  .nb-toolbar-small md-toolbar-row {\n    height: 2em;\n    min-height: 2rem; }\n\n.nb-toolbar-small md-toolbar-row {\n  height: 2em;\n  min-height: 2rem;\n  padding: .25rem 1rem; }\n\nmd-card.nb-stackable {\n  padding-top: .0rem;\n  padding-bottom: .5rem; }\n\ntable.nb-results tr {\n  height: 2rem; }\n\ntable.nb-results tr.header {\n  font-weight: 500;\n  font-size: 1.2rem;\n  text-align: center;\n  color: #039be5; }\n\ntable.nb-results tr.values {\n  text-align: center;\n  color: #43a047; }\n\n.nb-footer {\n  font-size: 12px;\n  color: white; }\n\n.nb-table-container {\n  max-width: 100%;\n  overflow-x: auto; }\n\n.flex-column {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.flex-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.flex-fill {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n"

/***/ },

/***/ 737:
/***/ function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n.md-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n[md-ripple] {\n  overflow: hidden; }\n\n[md-ripple].mdRippleUnbounded {\n  overflow: visible; }\n\n.md-ripple-background {\n  background-color: rgba(0, 0, 0, 0.0588);\n  opacity: 0;\n  -webkit-transition: opacity 300ms linear;\n  transition: opacity 300ms linear;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.mdRippleUnbounded .md-ripple-background {\n  display: none; }\n\n.md-ripple-background.md-ripple-active {\n  opacity: 1; }\n\n.mdRippleFocused .md-ripple-background {\n  opacity: 1; }\n\n.md-ripple-foreground {\n  background-color: rgba(0, 0, 0, 0.0588);\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: 0.25;\n  position: absolute;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1); }\n\n.md-ripple-foreground.md-ripple-fade-in {\n  opacity: 1; }\n\n.md-ripple-foreground.md-ripple-fade-out {\n  opacity: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.mdRippleFocused .md-ripple-background {\n  background-color: rgba(67, 160, 71, 0.1); }\n\n[md-button].md-button-focus.md-primary .md-button-focus-overlay, [md-icon-button].md-button-focus.md-primary .md-button-focus-overlay, [md-raised-button].md-button-focus.md-primary .md-button-focus-overlay, [md-fab].md-button-focus.md-primary .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-primary .md-button-focus-overlay {\n  background-color: rgba(3, 155, 229, 0.12); }\n\n[md-button].md-button-focus.md-accent .md-button-focus-overlay, [md-icon-button].md-button-focus.md-accent .md-button-focus-overlay, [md-raised-button].md-button-focus.md-accent .md-button-focus-overlay, [md-fab].md-button-focus.md-accent .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-accent .md-button-focus-overlay {\n  background-color: rgba(67, 160, 71, 0.12); }\n\n[md-button].md-button-focus.md-warn .md-button-focus-overlay, [md-icon-button].md-button-focus.md-warn .md-button-focus-overlay, [md-raised-button].md-button-focus.md-warn .md-button-focus-overlay, [md-fab].md-button-focus.md-warn .md-button-focus-overlay, [md-mini-fab].md-button-focus.md-warn .md-button-focus-overlay {\n  background-color: rgba(229, 57, 53, 0.12); }\n\n[md-button], [md-icon-button] {\n  background: transparent; }\n  [md-button].md-primary, [md-icon-button].md-primary {\n    color: #039be5; }\n  [md-button].md-accent, [md-icon-button].md-accent {\n    color: #43a047; }\n  [md-button].md-warn, [md-icon-button].md-warn {\n    color: #e53935; }\n  [md-button].md-primary[disabled], [md-button].md-accent[disabled], [md-button].md-warn[disabled], [md-button][disabled][disabled], [md-icon-button].md-primary[disabled], [md-icon-button].md-accent[disabled], [md-icon-button].md-warn[disabled], [md-icon-button][disabled][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n  [md-button]:hover.md-primary .md-button-focus-overlay, [md-icon-button]:hover.md-primary .md-button-focus-overlay {\n    background-color: rgba(3, 155, 229, 0.12); }\n  [md-button]:hover.md-accent .md-button-focus-overlay, [md-icon-button]:hover.md-accent .md-button-focus-overlay {\n    background-color: rgba(67, 160, 71, 0.12); }\n  [md-button]:hover.md-warn .md-button-focus-overlay, [md-icon-button]:hover.md-warn .md-button-focus-overlay {\n    background-color: rgba(229, 57, 53, 0.12); }\n\n[md-raised-button], [md-fab], [md-mini-fab] {\n  background-color: #303030; }\n  [md-raised-button].md-primary, [md-fab].md-primary, [md-mini-fab].md-primary {\n    color: white; }\n  [md-raised-button].md-accent, [md-fab].md-accent, [md-mini-fab].md-accent {\n    color: white; }\n  [md-raised-button].md-warn, [md-fab].md-warn, [md-mini-fab].md-warn {\n    color: white; }\n  [md-raised-button].md-primary[disabled], [md-raised-button].md-accent[disabled], [md-raised-button].md-warn[disabled], [md-raised-button][disabled][disabled], [md-fab].md-primary[disabled], [md-fab].md-accent[disabled], [md-fab].md-warn[disabled], [md-fab][disabled][disabled], [md-mini-fab].md-primary[disabled], [md-mini-fab].md-accent[disabled], [md-mini-fab].md-warn[disabled], [md-mini-fab][disabled][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n  [md-raised-button].md-primary, [md-fab].md-primary, [md-mini-fab].md-primary {\n    background-color: #039be5; }\n  [md-raised-button].md-accent, [md-fab].md-accent, [md-mini-fab].md-accent {\n    background-color: #43a047; }\n  [md-raised-button].md-warn, [md-fab].md-warn, [md-mini-fab].md-warn {\n    background-color: #e53935; }\n  [md-raised-button].md-primary[disabled], [md-raised-button].md-accent[disabled], [md-raised-button].md-warn[disabled], [md-raised-button][disabled][disabled], [md-fab].md-primary[disabled], [md-fab].md-accent[disabled], [md-fab].md-warn[disabled], [md-fab][disabled][disabled], [md-mini-fab].md-primary[disabled], [md-mini-fab].md-accent[disabled], [md-mini-fab].md-warn[disabled], [md-mini-fab][disabled][disabled] {\n    background-color: rgba(255, 255, 255, 0.12); }\n\n[md-fab], [md-mini-fab] {\n  background-color: #43a047;\n  color: white; }\n\n.md-button-toggle-checked .md-button-toggle-label-content {\n  background-color: #e0e0e0; }\n\n.md-button-toggle-disabled .md-button-toggle-label-content {\n  background-color: rgba(255, 255, 255, 0.3); }\n\nmd-card {\n  background: #424242;\n  color: white; }\n\nmd-card-subtitle {\n  color: rgba(255, 255, 255, 0.7); }\n\n.md-checkbox-frame {\n  border-color: rgba(255, 255, 255, 0.7); }\n\n.md-checkbox-checkmark {\n  fill: #303030; }\n\n.md-checkbox-checkmark-path {\n  stroke: #303030 !important; }\n\n.md-checkbox-mixedmark {\n  background-color: #303030; }\n\n.md-checkbox-indeterminate.md-primary .md-checkbox-background, .md-checkbox-checked.md-primary .md-checkbox-background {\n  background-color: #03a9f4; }\n\n.md-checkbox-indeterminate.md-accent .md-checkbox-background, .md-checkbox-checked.md-accent .md-checkbox-background {\n  background-color: #4caf50; }\n\n.md-checkbox-indeterminate.md-warn .md-checkbox-background, .md-checkbox-checked.md-warn .md-checkbox-background {\n  background-color: #f44336; }\n\n.md-checkbox-disabled.md-checkbox-checked .md-checkbox-background, .md-checkbox-disabled.md-checkbox-indeterminate .md-checkbox-background {\n  background-color: #686868; }\n\n.md-checkbox-disabled:not(.md-checkbox-checked) .md-checkbox-frame {\n  border-color: #686868; }\n\n.md-checkbox:not(.md-checkbox-disabled).md-primary .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(3, 155, 229, 0.26); }\n\n.md-checkbox:not(.md-checkbox-disabled).md-accent .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(67, 160, 71, 0.26); }\n\n.md-checkbox:not(.md-checkbox-disabled).md-warn .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(229, 57, 53, 0.26); }\n\n.md-chip:not(.md-basic-chip) {\n  background-color: #424242;\n  color: white; }\n\n.md-chip.md-chip-selected:not(.md-basic-chip) {\n  background-color: #212121;\n  color: white; }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-primary {\n    background-color: #03a9f4;\n    color: white; }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-accent {\n    background-color: #4caf50;\n    color: white; }\n  .md-chip.md-chip-selected:not(.md-basic-chip).md-warn {\n    background-color: #f44336;\n    color: white; }\n\nmd-dialog-container {\n  background: #424242; }\n\nmd-icon.md-primary {\n  color: #039be5; }\n\nmd-icon.md-accent {\n  color: #43a047; }\n\nmd-icon.md-warn {\n  color: #e53935; }\n\n.md-input-placeholder {\n  color: rgba(255, 255, 255, 0.3); }\n  .md-input-placeholder.md-focused {\n    color: #039be5; }\n    .md-input-placeholder.md-focused.md-accent {\n      color: #43a047; }\n    .md-input-placeholder.md-focused.md-warn {\n      color: #e53935; }\n\ninput.md-input-element:-webkit-autofill + .md-input-placeholder .md-placeholder-required,\n.md-input-placeholder.md-float.md-focused .md-placeholder-required {\n  color: #43a047; }\n\n.md-input-underline {\n  border-color: rgba(255, 255, 255, 0.12); }\n  .md-input-underline .md-input-ripple {\n    background-color: #039be5; }\n    .md-input-underline .md-input-ripple.md-accent {\n      background-color: #43a047; }\n    .md-input-underline .md-input-ripple.md-warn {\n      background-color: #e53935; }\n\nmd-list md-list-item, md-list a[md-list-item], md-nav-list md-list-item, md-nav-list a[md-list-item] {\n  color: white; }\n\nmd-list [md-subheader], md-nav-list [md-subheader] {\n  color: rgba(255, 255, 255, 0.7); }\n\nmd-divider {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n\nmd-nav-list .md-list-item:hover, md-nav-list .md-list-item.md-list-item-focus {\n  background: rgba(255, 255, 255, 0.04); }\n\n.md-menu-content {\n  background: #424242; }\n\n[md-menu-item] {\n  background: transparent;\n  color: white; }\n  [md-menu-item][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n  [md-menu-item] md-icon {\n    color: white; }\n  [md-menu-item]:hover:not([disabled]), [md-menu-item]:focus:not([disabled]) {\n    background: rgba(255, 255, 255, 0.04); }\n\n.md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#b3e5fc%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.md-progress-bar-buffer {\n  background-color: #b3e5fc; }\n\n.md-progress-bar-fill::after {\n  background-color: #039be5; }\n\nmd-progress-bar.md-accent .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#c8e6c9%27%2F%3E%3C%2Fsvg%3E\"); }\n\nmd-progress-bar.md-accent .md-progress-bar-buffer {\n  background-color: #c8e6c9; }\n\nmd-progress-bar.md-accent .md-progress-bar-fill::after {\n  background-color: #43a047; }\n\nmd-progress-bar.md-warn .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\nmd-progress-bar.md-warn .md-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\nmd-progress-bar.md-warn .md-progress-bar-fill::after {\n  background-color: #e53935; }\n\nmd-progress-spinner path, md-progress-circle path, md-spinner path {\n  stroke: #039be5; }\n\nmd-progress-spinner.md-accent path, md-progress-circle.md-accent path, md-spinner.md-accent path {\n  stroke: #43a047; }\n\nmd-progress-spinner.md-warn path, md-progress-circle.md-warn path, md-spinner.md-warn path {\n  stroke: #e53935; }\n\n.md-radio-outer-circle {\n  border-color: rgba(255, 255, 255, 0.7); }\n  .md-radio-checked .md-radio-outer-circle {\n    border-color: #43a047; }\n  .md-radio-disabled .md-radio-outer-circle {\n    border-color: rgba(255, 255, 255, 0.3); }\n\n.md-radio-inner-circle {\n  background-color: #43a047; }\n  .md-radio-disabled .md-radio-inner-circle {\n    background-color: rgba(255, 255, 255, 0.3); }\n\n.md-radio-ripple .md-ripple-foreground {\n  background-color: rgba(67, 160, 71, 0.26); }\n  .md-radio-disabled .md-radio-ripple .md-ripple-foreground {\n    background-color: rgba(255, 255, 255, 0.3); }\n\n.md-select-trigger {\n  color: rgba(255, 255, 255, 0.3);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12); }\n  md-select:focus:not(.md-select-disabled) .md-select-trigger {\n    color: #039be5;\n    border-bottom: 1px solid #039be5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .md-select-trigger {\n    color: #e53935;\n    border-bottom: 1px solid #e53935; }\n\n.md-select-arrow {\n  color: rgba(255, 255, 255, 0.3); }\n  md-select:focus:not(.md-select-disabled) .md-select-arrow {\n    color: #039be5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .md-select-arrow {\n    color: #e53935; }\n\n.md-select-content {\n  background: #424242; }\n\n.md-select-value {\n  color: white; }\n  .md-select-disabled .md-select-value {\n    color: rgba(255, 255, 255, 0.3); }\n\nmd-option:hover:not(.md-option-disabled), md-option:focus:not(.md-option-disabled) {\n  background: rgba(255, 255, 255, 0.04); }\n\nmd-option.md-selected {\n  background: rgba(255, 255, 255, 0.04);\n  color: #039be5; }\n\nmd-option.md-option-disabled {\n  color: rgba(255, 255, 255, 0.3); }\n\n.md-sidenav-container {\n  background-color: #303030;\n  color: white; }\n\nmd-sidenav {\n  background-color: #424242;\n  color: white; }\n  md-sidenav.md-sidenav-push {\n    background-color: #424242; }\n\n.md-sidenav-backdrop.md-sidenav-shown {\n  background-color: rgba(189, 189, 189, 0.6); }\n\nmd-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #a5d6a7; }\n\nmd-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(165, 214, 167, 0.5); }\n\nmd-slide-toggle.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(255, 255, 255, 0.12); }\n\nmd-slide-toggle.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(165, 214, 167, 0.26); }\n\nmd-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #81d4fa; }\n\nmd-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(129, 212, 250, 0.5); }\n\nmd-slide-toggle.md-primary.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(255, 255, 255, 0.12); }\n\nmd-slide-toggle.md-primary.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(129, 212, 250, 0.26); }\n\nmd-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #ef9a9a; }\n\nmd-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(239, 154, 154, 0.5); }\n\nmd-slide-toggle.md-warn.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(255, 255, 255, 0.12); }\n\nmd-slide-toggle.md-warn.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(239, 154, 154, 0.26); }\n\n.md-disabled .md-slide-toggle-thumb {\n  background-color: #424242; }\n\n.md-disabled .md-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.md-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.md-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n.md-slider-track {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.md-slider-track-fill {\n  background-color: #43a047; }\n\n.md-slider-thumb {\n  background-color: #43a047; }\n\n.md-slider-thumb-label {\n  background-color: #43a047; }\n\n.md-slider-thumb-label-text {\n  color: white; }\n\n[md-tab-nav-bar],\n.md-tab-header {\n  border-bottom: 1px solid black; }\n\n.md-tab-label:focus {\n  background-color: rgba(179, 229, 252, 0.3); }\n\nmd-ink-bar {\n  background-color: #03a9f4; }\n\nmd-toolbar {\n  background: #212121;\n  color: white; }\n  md-toolbar.md-primary {\n    background: #039be5;\n    color: white; }\n  md-toolbar.md-accent {\n    background: #43a047;\n    color: white; }\n  md-toolbar.md-warn {\n    background: #e53935;\n    color: white; }\n\n.md-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n.primary-color-bg {\n  background-color: #039be5;\n  color: white; }\n\n.primary-color-fg {\n  color: #039be5; }\n\n.accent-color-bg {\n  background-color: #43a047;\n  color: white; }\n\n.accent-color-fg {\n  color: #43a047; }\n\n.warn-color-bg {\n  background-color: #e53935;\n  color: white; }\n\n.warn-color-fg {\n  color: #e53935; }\n\nthead.primary-color-fg th {\n  color: #039be5 !important; }\n\n.guarenteed {\n  background-color: #4caf50; }\n\n.unattainable {\n  background-color: #e53935; }\n\n.possible {\n  background-color: #ffc107; }\n"

/***/ },

/***/ 738:
/***/ function(module, exports) {

module.exports = "<md-toolbar color=\"primary\" class=\"nb-main-toolbar\">Min/Max GPA Calculation</md-toolbar>\r\n<md-card>\r\n  <md-card-content>\r\n    <md-card class=\"nb-stackable\">\r\n      <md-toolbar color=\"accent\" class=\"nb-toolbar-small\">\r\n        Step 1: Credits\r\n      </md-toolbar>\r\n      <md-card-content>\r\n        <table style=\"width: 100%\" cellspacing=\"0\">\r\n          <tr>\r\n            <td colspan=\"2\">\r\n              <p>Enter the number credits you have completed, and the number of credits you will complete in the\r\n                future</p>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n\r\n              <md-input type=\"number\" [(ngModel)]=\"curCredits\"\r\n                        placeholder=\"Current Credits\" min=\"0\" step=\"1\"\r\n                        style=\"width:100%;\">\r\n                <md-hint>The number of credits you have completed</md-hint>\r\n              </md-input>\r\n            </td>\r\n            <td>\r\n              <md-input type=\"number\" [(ngModel)]=\"futCredits\"\r\n                        placeholder=\"Future Credits\" min=\"0\" step=\"1\"\r\n                        style=\"width:100%;\">\r\n                <md-hint>The number of credits that you will take in the future</md-hint>\r\n              </md-input>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n      </md-card-content>\r\n    </md-card>\r\n    <md-card>\r\n      <md-toolbar color=\"accent\" class=\"nb-toolbar-small\">\r\n        Step 2: Grade\r\n      </md-toolbar>\r\n\r\n      <md-card-content>\r\n        <table style=\"width: 100%\" cellspacing=\"0\">\r\n          <tr>\r\n            <td colspan=\"2\">\r\n              <p>Enter either your current GPA, or your current Gradepoints</p>\r\n              <p>Don't worry about the second field, it will be calculated for you as you type</p>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <md-input type=\"number\" [(ngModel)]=\"curGPA\"\r\n                        placeholder=\"Current GPA\" min=\"0\" step=\"0.01\"\r\n                        style=\"width:100%;\">\r\n                <md-hint>The current GPA that you have earned</md-hint>\r\n              </md-input>\r\n            </td>\r\n            <td>\r\n              <md-input type=\"number\" [(ngModel)]=\"curGradepoints\"\r\n                        placeholder=\"Current Gradepoints\" min=\"0\" step=\"0.01\"\r\n                        style=\"width:100%;\">\r\n                <md-hint>The number of gradepoints that you have already earned</md-hint>\r\n              </md-input>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </md-card-content>\r\n    </md-card>\r\n    <br/>\r\n    <br/>\r\n    <md-card>\r\n      <md-toolbar color=\"accent\" class=\"nb-toolbar-small\">Results</md-toolbar>\r\n      <md-card-content>\r\n        <table style=\"width:100%;\" cellspacing=\"0\" class=\"nb-results\">\r\n          <tr class=\"header\">\r\n            <td style=\"width: 33%;\">Min Gradepoints</td>\r\n            <td style=\"width: 33%;\">To Be Earned Gradepoints</td>\r\n            <td style=\"width: 33%;\">Max Gradepoints</td>\r\n          </tr>\r\n          <tr class=\"values\">\r\n            <td style=\"width: 33%;\">{{curGradepoints || 'Not Enough Info'}}</td>\r\n            <td style=\"width: 33%;\">{{maxGradepoints - curGradepoints|| 'Not Enough Info'}}</td>\r\n            <td style=\"width: 33%;\">{{maxGradepoints || 'Not Enough Info'}}</td>\r\n          </tr>\r\n        </table>\r\n        <table style=\"width:100%;\" cellspacing=\"0\" class=\"nb-results\">\r\n          <tr class=\"header\">\r\n            <td style=\"width: 33%;\">Total Credits</td>\r\n            <td style=\"width: 33%;\">Min GPA</td>\r\n            <td style=\"width: 33%;\">Max GPA</td>\r\n          </tr>\r\n          <tr class=\"values\">\r\n            <td style=\"width: 33%;\">{{totalCredits || 'Not Enough Info'}}</td>\r\n            <td style=\"width: 33%;\">{{minGPA || 'Not Enough Info'}}</td>\r\n            <td style=\"width: 33%;\">{{maxGPA || 'Not Enough Info'}}</td>\r\n          </tr>\r\n        </table>\r\n      </md-card-content>\r\n\r\n      <md-card-content class=\"nb-table-container\">\r\n        <app-gpa-table [totCredits]=\"totalCredits\" [curCredits]=\"curCredits\"\r\n                       [curGradepoints]=\"curGradepoints\"></app-gpa-table>\r\n      </md-card-content>\r\n    </md-card>\r\n  </md-card-content>\r\n</md-card>\r\n<md-toolbar class=\"nb-footer\">\r\n  <div class=\"flex-column\">\r\n    <a md-button disabled href=\"\">Created by Nick Bolles</a>\r\n  </div>\r\n  <span class=\"flex-fill\"></span>\r\n  <span class=\"flex-fill\">\r\n      <a md-button href=\"http://www.nickbolles.com\">NickBolles.com</a>\r\n    </span>\r\n  <span class=\"flex-fill\">\r\n      <a md-button href=\"https://www.github.com/NickBolles\">Github</a>\r\n    </span>\r\n  <span class=\"flex-fill\">\r\n      <a md-button href=\"https://www.linkedin.com/in/nickbolles\">LinkedIn</a>\r\n    </span>\r\n</md-toolbar>\r\n"

/***/ },

/***/ 739:
/***/ function(module, exports) {

module.exports = "<md-data-table layout-fill>\r\n  <thead class=\"primary-color-fg\">\r\n  <tr>\r\n    <th>GPA</th>\r\n    <th>Gradepoints Required</th>\r\n    <th>Gradepoints Still Needed</th>\r\n    <th>Gradepoints can Lose</th>\r\n    <th>Guarenteed?</th>\r\n    <th>Attainable?</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr *ngFor=\"let threshold of thresholds\"\r\n      [ngClass]=\"{'guarenteed': threshold.guarenteed, 'unattainable': !threshold.attainable, 'possible': !threshold.guarenteed && threshold.attainable}\">\r\n    <td style=\"font-weight: 600\">{{threshold.gpa }}</td>\r\n    <td>{{threshold.gradePoints || 'n/a'}}</td>\r\n    <td>{{threshold.gradePointsNeeded || 'n/a'}}</td>\r\n    <td>{{threshold.canLoseGradePoints || 'n/a'}}</td>\r\n    <td style=\"font-weight: 600\">{{threshold.guarenteed ? 'Yes' : 'No'}}</td>\r\n    <td style=\"font-weight: 600\">{{threshold.attainable ? 'Yes' : 'No'}}</td>\r\n  </tr>\r\n  </tbody>\r\n</md-data-table>\r\n"

/***/ },

/***/ 777:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(434);


/***/ }

},[777]);
//# sourceMappingURL=main.bundle.map