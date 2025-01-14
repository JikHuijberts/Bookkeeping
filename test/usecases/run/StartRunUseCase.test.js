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

const { run: { StartRunUseCase } } = require('../../../lib/usecases');
const { dtos: { StartRunDto } } = require('../../../lib/domain');
const chai = require('chai');

const { expect } = chai;

module.exports = () => {
    let startRunDto;

    beforeEach(async () => {
        startRunDto = await StartRunDto.validateAsync({
            body: {
                runNumber: 107,
                timeO2Start: '2022-03-21 13:00:00',
                timeTrgStart: '2022-03-21 13:00:00',
                environmentId: '1234567890',
                runType: 'technical',
                runQuality: 'good',
                nDetectors: 3,
                bytesReadOut: 1024,
                nSubtimeframes: 10,
                nFlps: 10,
                nEpns: 10,
                dd_flp: true,
                dcs: true,
                epn: true,
                epnTopology: 'normal',
                detectors: 'CPV',
            },
        });
    });
    it('should successfully store and return the saved entity', async () => {
        const { result, error } = await new StartRunUseCase()
            .execute(startRunDto);
        expect(error).to.be.undefined;
        expect(result).to.be.an('object');
        expect(result.id).to.equal(107);
    });

    it('should fail to save a run with an already existing run number', async () => {
        const { result, error } = await new StartRunUseCase()
            .execute(startRunDto);

        expect(result).to.be.undefined;
        expect(error).to.eql({
            status: 409,
            title: 'Conflict',
            detail: 'A run already exists with run number 107',
        });
    });

    it('should successfully store and return the saved entity with default values if not provided', async () => {
        delete startRunDto.body.detectors;
        startRunDto.body.runNumber = 108;
        const { result, error } = await new StartRunUseCase()
            .execute(startRunDto);
        expect(error).to.be.undefined;
        expect(result).to.be.an('object');
        expect(result.id).to.equal(108);
        expect(result.detectors).to.equal(null);
    });
};
