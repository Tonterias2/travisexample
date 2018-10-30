import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipsterpress09SharedModule } from 'app/shared';
import { Jhipsterpress09AdminModule } from 'app/admin/admin.module';
import {
    FollowComponent,
    FollowDetailComponent,
    FollowUpdateComponent,
    FollowDeletePopupComponent,
    FollowDeleteDialogComponent,
    followRoute,
    followPopupRoute
} from './';

const ENTITY_STATES = [...followRoute, ...followPopupRoute];

@NgModule({
    imports: [Jhipsterpress09SharedModule, Jhipsterpress09AdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [FollowComponent, FollowDetailComponent, FollowUpdateComponent, FollowDeleteDialogComponent, FollowDeletePopupComponent],
    entryComponents: [FollowComponent, FollowUpdateComponent, FollowDeleteDialogComponent, FollowDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipsterpress09FollowModule {}
