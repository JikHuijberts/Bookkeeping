/**
 * @license
 * Copyright CERN and copyright holders of ALICE O2. This software is
 * distributed under the terms of the GNU General Public License v3 (GPL
 * Version 3), copied verbatim in the file "COPYING".
 *
 * See http://alice-o2.web.cern.ch/license for full licensing information.
 *
 * In applying this license CERN does not waive the privileges and immunities
 * granted to it by virtue of its status as an Intergovernmental Organization
 * or submit itself to any jurisdiction.
 */

const chai = require('chai');
const { defaultBefore, defaultAfter, expectInnerText, pressElement, getFirstRow } = require('../defaults');

const { expect } = chai;

module.exports = () => {
    let page;
    let browser;
    let url;

    let table;
    let firstRowId;

    before(async () => {
        [page, browser, url] = await defaultBefore(page, browser);
        await page.setViewport({
            width: 1920,
            height: 1080,
            deviceScaleFactor: 1,
        });
    });
    after(async () => {
        [page, browser] = await defaultAfter(page, browser);
    });

    it('run detail loads correctly', async () => {
        await page.goto(`${url}/?page=run-detail&id=1`, { waitUntil: 'networkidle0' });
        await expectInnerText(page, 'h2', 'Run #1');
    });

    it('successfully entered EDIT mode of a run', async () => {
        await pressElement(page, '#edit-run');
        await page.waitForTimeout(100);
        await expectInnerText(page, '#save-run', 'Save');
        await expectInnerText(page, '#cancel-run', 'Revert');
    });

    it('successfully changed run tags in EDIT mode', async () => {
        await pressElement(page, '#tags-selection #tagCheckbox1');
        await page.waitForTimeout(100);
        await pressElement(page, '#update-tags');
        await page.waitForTimeout(100);
        expect(await page.$eval('#tags-selection #tagCheckbox1', (elem)=>elem.checked)).to.be.true;
    });

    it('should show lhc data in edit mode', async () => {
        await page.waitForTimeout(100);
        const element = await page.$('#lhcFill-id>b');
        const value = await element.evaluate((el) => el.textContent);
        expect(value).to.equal('LHC Data:');
    });

    it('successfully exited EDIT mode of a run', async () => {
        await pressElement(page, '#cancel-run');
        await page.waitForTimeout(100);
        await expectInnerText(page, '#edit-run', 'Edit Run');
    });

    it('should not show edit run button when not admin', async () => {
        await page.goto(`${url}/?page=run-detail&id=1`);
        await page.waitForTimeout(100);
        await page.click('div[title="User Actions"]');
        await page.waitForTimeout(100);
        await page.click('span.slider.round');
        await page.waitForTimeout(100);
        expect(await page.$('#edit-run')).to.equal(null);
    });

    it('can navigate to the flp panel', async () => {
        await pressElement(page, '#flps-tab');
        await page.waitForTimeout(100);
        const redirectedUrl = await page.url();
        expect(String(redirectedUrl).startsWith(`${url}/?page=run-detail&id=1&panel=flps`)).to.be.true;
    });

    it('can navigate to the logs panel', async () => {
        await pressElement(page, '#logs-tab');
        await page.waitForTimeout(100);
        const redirectedUrl = await page.url();
        expect(String(redirectedUrl).startsWith(`${url}/?page=run-detail&id=1&panel=logs`)).to.be.true;
    });
    it('should show lhc data in normal mode', async () => {
        await page.waitForTimeout(100);
        const element = await page.$('#lhcFill-id>b');
        const value = await element.evaluate((el) => el.textContent);
        expect(value).to.equal('LHC Data:');
    });
    it('can navigate to a log detail page', async () => {
        table = await page.$$('tr');
        firstRowId = await getFirstRow(table, page);

        // We expect the entry page to have the same id as the id from the run overview
        await pressElement(page, `#${firstRowId}`);
        await page.waitForTimeout(300);
        const redirectedUrl = await page.url();
        expect(String(redirectedUrl).startsWith(`${url}/?page=log-detail&id=1`)).to.be.true;
    });

    it('notifies if a specified run id is invalid', async () => {
        // Navigate to a run detail view with an id that cannot exist
        await page.goto(`${url}/?page=run-detail&id=abc`, { waitUntil: 'networkidle0' });

        // We expect there to be an error message
        await expectInnerText(page, '.alert', 'Invalid Attribute: "params.runId" must be a number');
    });

    it('notifies if a specified run id is not found', async () => {
        // Navigate to a run detail view with an id that cannot exist
        await page.goto(`${url}/?page=run-detail&id=999`, { waitUntil: 'networkidle0' });

        // We expect there to be an error message
        await expectInnerText(page, '.alert', 'Run with this id (999) could not be found');
    });

    it('can return to the overview page if an error occurred', async () => {
        // We expect there to be a button to return to the overview page
        await expectInnerText(page, '.btn-primary.btn-redirect', 'Return to Overview');

        // We expect the button to return the user to the overview page when pressed
        await pressElement(page, '.btn-primary.btn-redirect');
        await page.waitForTimeout(100);
        expect(page.url()).to.equal(`${url}/?page=run-overview`);
    });
};
