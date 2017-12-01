import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CajeroComponent } from './cajero/cajero.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/cajero', pathMatch: 'full'}
    {path: 'cajero', component: CajeroComponent},
    {path: 'admin', component: AdminComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
