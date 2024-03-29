/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { VtopicComponentsPage, VtopicDeleteDialog, VtopicUpdatePage } from './vtopic.page-object';

const expect = chai.expect;

describe('Vtopic e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let vtopicUpdatePage: VtopicUpdatePage;
    let vtopicComponentsPage: VtopicComponentsPage;
    /*let vtopicDeleteDialog: VtopicDeleteDialog;*/

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Vtopics', async () => {
        await navBarPage.goToEntity('vtopic');
        vtopicComponentsPage = new VtopicComponentsPage();
        expect(await vtopicComponentsPage.getTitle()).to.eq('jhipsterpress09App.vtopic.home.title');
    });

    it('should load create Vtopic page', async () => {
        await vtopicComponentsPage.clickOnCreateButton();
        vtopicUpdatePage = new VtopicUpdatePage();
        expect(await vtopicUpdatePage.getPageTitle()).to.eq('jhipsterpress09App.vtopic.home.createOrEditLabel');
        await vtopicUpdatePage.cancel();
    });

    /* it('should create and save Vtopics', async () => {
        const nbButtonsBeforeCreate = await vtopicComponentsPage.countDeleteButtons();

        await vtopicComponentsPage.clickOnCreateButton();
        await promise.all([
            vtopicUpdatePage.setCreationDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            vtopicUpdatePage.setVtopictitleInput('vtopictitle'),
            vtopicUpdatePage.setVtopicdescInput('vtopicdesc'),
            vtopicUpdatePage.userSelectLastOption(),
        ]);
        expect(await vtopicUpdatePage.getCreationDateInput()).to.contain('2001-01-01T02:30');
        expect(await vtopicUpdatePage.getVtopictitleInput()).to.eq('vtopictitle');
        expect(await vtopicUpdatePage.getVtopicdescInput()).to.eq('vtopicdesc');
        await vtopicUpdatePage.save();
        expect(await vtopicUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await vtopicComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });*/

    /* it('should delete last Vtopic', async () => {
        const nbButtonsBeforeDelete = await vtopicComponentsPage.countDeleteButtons();
        await vtopicComponentsPage.clickOnLastDeleteButton();

        vtopicDeleteDialog = new VtopicDeleteDialog();
        expect(await vtopicDeleteDialog.getDialogTitle())
            .to.eq('jhipsterpress09App.vtopic.delete.question');
        await vtopicDeleteDialog.clickOnConfirmButton();

        expect(await vtopicComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });*/

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
