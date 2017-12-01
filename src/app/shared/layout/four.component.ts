import {
    Component, Input,
    OnInit, OnDestroy, OnChanges, SimpleChanges,
    ViewChild, ViewContainerRef, 
    ComponentFactoryResolver, ComponentRef 
} from '@angular/core';

import { PlatoComponent } from '../templates/admin/plato/plato.component';
import { MenuComponent } from '../templates/admin/menu/menu.component';
import { PolloComponent } from '../templates/admin/pollo/pollo.component';
import { RefrescoComponent } from '../templates/admin/refresco/refresco.component';
import { RefrescomenuComponent } from '../templates/admin/refrescomenu/refrescomenu.component';
import { CategoriasComponent } from '../templates/admin/categorias/categorias.component';
import { TipoComponent } from '../templates/admin/tipo/tipo.component';

import { MenuPlatosComponent } from '../templates/cajero/menu-platos/menu-platos.component';
import { MenuRefrescosComponent } from '../templates/cajero/menu-refrescos/menu-refrescos.component';

@Component({
selector: 'four',
templateUrl: './four.component.html',
styleUrls: ['./four.component.sass']
})
export class FourComponent implements OnInit, OnDestroy, OnChanges {
    
    @ViewChild('container', { read: ViewContainerRef })
    container: ViewContainerRef;

    @Input()
    type: number;

    private views = {
        1: MenuComponent,
        2: PlatoComponent,
        3: PolloComponent,
        4: RefrescoComponent,
        5: RefrescomenuComponent,
        6: CategoriasComponent,
        7: TipoComponent,
        8: MenuPlatosComponent,
        9: MenuRefrescosComponent
    };

    private componentRef: ComponentRef<{}>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    getComponentType(view: number) {
        let type = this.views[view];
        return type || MenuComponent;
    }

    reDraw() {
        // clear the previus content
        this.container.clear();
        if (this.type) {
            let componentType = this.getComponentType(this.type);
            
            // note: componentType must be declared within
            // module.entryComponents
            let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            this.componentRef = this.container.createComponent(factory);

            // set component context
            //let instance = this.componentRef.instance;
            // instance.context = this.context;
        }
    }

    ngOnInit() {
        this.reDraw();
    }

    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        this.type = changes.type.currentValue;
        this.ngOnInit();
    }
}
