import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipsterpress09SharedModule } from 'app/shared';
import { Jhipsterpress09AdminModule } from 'app/admin/admin.module';
import {
    VthumbComponent,
    VthumbDetailComponent,
    VthumbUpdateComponent,
    VthumbDeletePopupComponent,
    VthumbDeleteDialogComponent,
    vthumbRoute,
    vthumbPopupRoute
} from './';

const ENTITY_STATES = [...vthumbRoute, ...vthumbPopupRoute];

@NgModule({
    imports: [Jhipsterpress09SharedModule, Jhipsterpress09AdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [VthumbComponent, VthumbDetailComponent, VthumbUpdateComponent, VthumbDeleteDialogComponent, VthumbDeletePopupComponent],
    entryComponents: [VthumbComponent, VthumbUpdateComponent, VthumbDeleteDialogComponent, VthumbDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipsterpress09VthumbModule {}
