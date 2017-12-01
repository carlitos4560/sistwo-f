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
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderlineComponent } from './orderline/orderline.component';
import { OrderComponent } from './order/order.component';
import { OrderItemComponent } from './order-item/order-item.component';

import { AppComponent } from './app.component';
import { LayoutCajeroComponent } from './shared/layout-cajero/layout.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { OneComponent } from './shared/layout/one.component';
import { TwoComponent } from './shared/layout/two.component';
import { ThreeComponent } from './shared/layout/three.component';
import { FourComponent } from './shared/layout/four.component';
import { FiveComponent } from './shared/layout/five.component';
import { CajeroComponent } from './cajero/cajero.component';
import { AdminComponent } from './admin/admin.component';

import { PlatoService } from './shared/services/plato.service';
import { PolloService } from './shared/services/pollo.service';
import { BetweenService } from './shared/services/between.service';
import { RefrescoService } from './shared/services/refresco.service';
import { CategoriaRefrescoService } from './shared/services/categoria-refresco.service';
import { TipoRefrescoService } from './shared/services/tipo-refresco.service';
import { MessageService } from './shared/services/message.service';

import { PlatoComponent } from './shared/templates/admin/plato/plato.component';
import { MenuComponent } from './shared/templates/admin/menu/menu.component';
import { PolloComponent } from './shared/templates/admin/pollo/pollo.component';
import { RefrescoComponent } from './shared/templates/admin/refresco/refresco.component';
import { RefrescomenuComponent } from './shared/templates/admin/refrescomenu/refrescomenu.component';
import { CategoriasComponent } from './shared/templates/admin/categorias/categorias.component';
import { TipoComponent } from './shared/templates/admin/tipo/tipo.component';
import { MenuPlatosComponent } from './shared/templates/cajero/menu-platos/menu-platos.component';
import { MenuRefrescosComponent } from './shared/templates/cajero/menu-refrescos/menu-refrescos.component';
import { ListPlatosComponent } from './shared/templates/cajero/menu-platos/list-platos/list-platos.component';
import { PlatocajeroComponent } from './shared/templates/cajero/menu-platos/list-platos/platocajero/platocajero.component';
import { ListRefrescosComponent } from './shared/templates/cajero/menu-refrescos/list-refrescos/list-refrescos.component';
import { RefrescocajeroComponent } from './shared/templates/cajero/menu-refrescos/list-refrescos/refrescocajero/refrescocajero.component';
import { EditPlatoComponent } from './shared/templates/admin/edit-plato/edit-plato.component';
import { EditRefrescoComponent } from './shared/templates/admin/edit-refresco/edit-refresco.component';


@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        LayoutCajeroComponent,
        OneComponent,
        TwoComponent,
        ThreeComponent,
        FourComponent,
        FiveComponent,
        CajeroComponent,
        AdminComponent,
        OrderDetailComponent,
        OrderlineComponent,
        OrderComponent,
        OrderItemComponent,
        PlatoComponent,
        MenuComponent,
        PolloComponent,
        RefrescoComponent,
        RefrescomenuComponent,
        CategoriasComponent,
        TipoComponent,
        MenuPlatosComponent,
        MenuRefrescosComponent,
        ListPlatosComponent,
        PlatocajeroComponent,
        ListRefrescosComponent,
        RefrescocajeroComponent,
        EditPlatoComponent,
        EditRefrescoComponent
    ],
    entryComponents: [
        MenuComponent,
        PlatoComponent,
        PolloComponent,
        RefrescoComponent,
        RefrescomenuComponent,
        CategoriasComponent,
        TipoComponent,
        MenuPlatosComponent,
        MenuRefrescosComponent,
        EditPlatoComponent,
        EditRefrescoComponent
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
        MatInputModule,
        MatSelectModule,
        MatGridListModule
    ],
    providers: [
        PlatoService,
        PolloService,
        BetweenService,
        RefrescoService,
        CategoriaRefrescoService,
        TipoRefrescoService,
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
