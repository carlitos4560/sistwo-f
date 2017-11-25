import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { OneComponent } from './shared/layout/one.component';
import { TwoComponent } from './shared/layout/two.component';
import { ThreeComponent } from './shared/layout/three.component';
import { FourComponent } from './shared/layout/four.component';
import { FiveComponent } from './shared/layout/five.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
