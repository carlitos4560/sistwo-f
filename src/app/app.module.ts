import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { OneComponent } from './shared/layout/one.component';
import { TwoComponent } from './shared/layout/two.component';
import { ThreeComponent } from './shared/layout/three.component';
import { FourComponent } from './shared/layout/four.component';
import { FiveComponent } from './shared/layout/five.component';
import { CajeroComponent } from './cajero/cajero.component';
import { AdminComponent } from './admin/admin.component';

import { PlatoService } from './shared/services/plato.service';

import { PlatoComponent } from './shared/templates/admin/plato/plato.component';
import { MenuComponent } from './shared/templates/admin/menu/menu.component';
import { PolloComponent } from './shared/templates/admin/pollo/pollo.component';


@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        OneComponent,
        TwoComponent,
        ThreeComponent,
        FourComponent,
        FiveComponent,
        CajeroComponent,
        AdminComponent,
        PlatoComponent,
        MenuComponent,
        PolloComponent
    ],
    entryComponents: [
        MenuComponent,
        PlatoComponent,
        PolloComponent
    ],
    imports: [
        routes,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [PlatoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
