import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipsterpress09SharedModule } from 'app/shared';
import { Jhipsterpress09AdminModule } from 'app/admin/admin.module';
import {
    CommunityComponent,
    CommunityDetailComponent,
    CommunityUpdateComponent,
    CommunityDeletePopupComponent,
    CommunityDeleteDialogComponent,
    communityRoute,
    communityPopupRoute
} from './';

const ENTITY_STATES = [...communityRoute, ...communityPopupRoute];

@NgModule({
    imports: [Jhipsterpress09SharedModule, Jhipsterpress09AdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        CommunityComponent,
        CommunityDetailComponent,
        CommunityUpdateComponent,
        CommunityDeleteDialogComponent,
        CommunityDeletePopupComponent
    ],
    entryComponents: [CommunityComponent, CommunityUpdateComponent, CommunityDeleteDialogComponent, CommunityDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipsterpress09CommunityModule {}
