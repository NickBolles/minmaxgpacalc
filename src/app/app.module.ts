import "hammerjs";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {MdDataTable} from "ng2-material/components/data-table";
import {AppComponent} from "./app.component";
import {GpaTableComponent} from "./gpa-table/gpa-table.component";

@NgModule({
  declarations: [
    AppComponent,
    GpaTableComponent,
    MdDataTable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule');
  }
}
