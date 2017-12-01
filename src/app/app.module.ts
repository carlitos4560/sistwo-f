import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { LayoutCajeroComponent } from './shared/layout-cajero/layout.component';
import { LayoutAdminComponent } from './shared/layout-admin/layout.component';
import { CajeroComponent } from './cajero/cajero.component';
import { AdminComponent } from './admin/admin.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderlineComponent } from './orderline/orderline.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { OrderComponent } from './order/order.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { MessageService } from './message.service';



@NgModule({
  declarations: [
    AppComponent,
    LayoutCajeroComponent,
    LayoutAdminComponent,
    CajeroComponent,
    AdminComponent,
    OrderDetailComponent,
    OrderlineComponent,
    OrderComponent,
    OrderItemComponent
  ],
  imports: [
    routes,
    BrowserModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
