import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipsterpress09SharedModule } from 'app/shared';
import { Jhipsterpress09AdminModule } from 'app/admin/admin.module';
import {
    AlbumComponent,
    AlbumDetailComponent,
    AlbumUpdateComponent,
    AlbumDeletePopupComponent,
    AlbumDeleteDialogComponent,
    albumRoute,
    albumPopupRoute
} from './';

const ENTITY_STATES = [...albumRoute, ...albumPopupRoute];

@NgModule({
    imports: [Jhipsterpress09SharedModule, Jhipsterpress09AdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [AlbumComponent, AlbumDetailComponent, AlbumUpdateComponent, AlbumDeleteDialogComponent, AlbumDeletePopupComponent],
    entryComponents: [AlbumComponent, AlbumUpdateComponent, AlbumDeleteDialogComponent, AlbumDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipsterpress09AlbumModule {}
