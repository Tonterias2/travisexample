/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { Jhipsterpress09TestModule } from '../../../test.module';
import { FeedbackDeleteDialogComponent } from 'app/entities/feedback/feedback-delete-dialog.component';
import { FeedbackService } from 'app/entities/feedback/feedback.service';

describe('Component Tests', () => {
    describe('Feedback Management Delete Component', () => {
        let comp: FeedbackDeleteDialogComponent;
        let fixture: ComponentFixture<FeedbackDeleteDialogComponent>;
        let service: FeedbackService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Jhipsterpress09TestModule],
                declarations: [FeedbackDeleteDialogComponent]
            })
                .overrideTemplate(FeedbackDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(FeedbackDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FeedbackService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
