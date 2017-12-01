import {
    Component, Input,
    OnInit, OnDestroy, OnChanges, SimpleChanges,
    ViewChild, ViewContainerRef, 
    ComponentFactoryResolver, ComponentRef 
} from '@angular/core';

import { MenuPlatosComponent } from '../templates/cajero/menu-platos/menu-platos.component';
import { MenuRefrescosComponent } from '../templates/cajero/menu-refrescos/menu-refrescos.component';
import { MenuComponent } from '../templates/admin/menu/menu.component';

@Component({
selector: 'four-cajero',
templateUrl: './four.component.html',
styleUrls: ['./four.component.sass']
})
export class FourCajeroComponent implements OnInit, OnDestroy, OnChanges {
    
    @ViewChild('container', { read: ViewContainerRef })
    container: ViewContainerRef;

    @Input()
    type: number;

    private views = {
        1: MenuPlatosComponent,
        2: MenuRefrescosComponent
    };

    private componentRef: ComponentRef<{}>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    getComponentType(view: number) {
        let type = this.views[view];
        return type || MenuPlatosComponent;
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
