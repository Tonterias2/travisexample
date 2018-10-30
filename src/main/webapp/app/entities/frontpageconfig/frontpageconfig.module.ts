import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipsterpress09SharedModule } from 'app/shared';
import {
    FrontpageconfigComponent,
    FrontpageconfigDetailComponent,
    FrontpageconfigUpdateComponent,
    FrontpageconfigDeletePopupComponent,
    FrontpageconfigDeleteDialogComponent,
    frontpageconfigRoute,
    frontpageconfigPopupRoute
} from './';

const ENTITY_STATES = [...frontpageconfigRoute, ...frontpageconfigPopupRoute];

@NgModule({
    imports: [Jhipsterpress09SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        FrontpageconfigComponent,
        FrontpageconfigDetailComponent,
        FrontpageconfigUpdateComponent,
        FrontpageconfigDeleteDialogComponent,
        FrontpageconfigDeletePopupComponent
    ],
    entryComponents: [
        FrontpageconfigComponent,
        FrontpageconfigUpdateComponent,
        FrontpageconfigDeleteDialogComponent,
        FrontpageconfigDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipsterpress09FrontpageconfigModule {}
