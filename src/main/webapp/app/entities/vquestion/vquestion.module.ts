import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipsterpress09SharedModule } from 'app/shared';
import { Jhipsterpress09AdminModule } from 'app/admin/admin.module';
import {
    VquestionComponent,
    VquestionDetailComponent,
    VquestionUpdateComponent,
    VquestionDeletePopupComponent,
    VquestionDeleteDialogComponent,
    vquestionRoute,
    vquestionPopupRoute
} from './';

const ENTITY_STATES = [...vquestionRoute, ...vquestionPopupRoute];

@NgModule({
    imports: [Jhipsterpress09SharedModule, Jhipsterpress09AdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        VquestionComponent,
        VquestionDetailComponent,
        VquestionUpdateComponent,
        VquestionDeleteDialogComponent,
        VquestionDeletePopupComponent
    ],
    entryComponents: [VquestionComponent, VquestionUpdateComponent, VquestionDeleteDialogComponent, VquestionDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipsterpress09VquestionModule {}
