/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { InterestComponentsPage, InterestDeleteDialog, InterestUpdatePage } from './interest.page-object';

const expect = chai.expect;

describe('Interest e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let interestUpdatePage: InterestUpdatePage;
    let interestComponentsPage: InterestComponentsPage;
    let interestDeleteDialog: InterestDeleteDialog;

    before(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Interests', async () => {
        await navBarPage.goToEntity('interest');
        interestComponentsPage = new InterestComponentsPage();
        expect(await interestComponentsPage.getTitle()).to.eq('jhipsterpress09App.interest.home.title');
    });

    it('should load create Interest page', async () => {
        await interestComponentsPage.clickOnCreateButton();
        interestUpdatePage = new InterestUpdatePage();
        expect(await interestUpdatePage.getPageTitle()).to.eq('jhipsterpress09App.interest.home.createOrEditLabel');
        await interestUpdatePage.cancel();
    });

    it('should create and save Interests', async () => {
        const nbButtonsBeforeCreate = await interestComponentsPage.countDeleteButtons();

        await interestComponentsPage.clickOnCreateButton();
        await promise.all([
            interestUpdatePage.setInterestNameInput('interestName')
            // interestUpdatePage.communitySelectLastOption(),
            // interestUpdatePage.uprofileSelectLastOption(),
        ]);
        expect(await interestUpdatePage.getInterestNameInput()).to.eq('interestName');
        await interestUpdatePage.save();
        expect(await interestUpdatePage.getSaveButton().isPresent()).to.be.false;

        expect(await interestComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    });

    it('should delete last Interest', async () => {
        const nbButtonsBeforeDelete = await interestComponentsPage.countDeleteButtons();
        await interestComponentsPage.clickOnLastDeleteButton();

        interestDeleteDialog = new InterestDeleteDialog();
        expect(await interestDeleteDialog.getDialogTitle()).to.eq('jhipsterpress09App.interest.delete.question');
        await interestDeleteDialog.clickOnConfirmButton();

        expect(await interestComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });

    after(async () => {
        await navBarPage.autoSignOut();
    });
});
