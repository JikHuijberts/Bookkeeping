/**
 * @license
 * Copyright 2019-2020 CERN and copyright holders of ALICE O2.
 * See http://alice-o2.web.cern.ch/copyright for details of the copyright holders.
 * All rights not expressly granted are reserved.
 *
 * This software is distributed under the terms of the GNU General Public
 * License v3 (GPL Version 3), copied verbatim in the file "COPYING".
 *
 * In applying this license CERN does not waive the privileges and immunities
 * granted to it by virtue of its status as an Intergovernmental Organization
 * or submit itself to any jurisdiction.
 */
const { lhcFill: { GetLhcFillUseCase } } = require('../../../lib/usecases');
const { dtos: { GetLhcFillDto } } = require('../../../lib/domain');
const chai = require('chai');

const { expect } = chai;

module.exports = () => {
    let getLhcFillDto;

    beforeEach(async () => {
        getLhcFillDto = await GetLhcFillDto.validateAsync({
            params: {
                fillNumber: 1,
            },
        });
        getLhcFillDto.session = {
            personid: 1,
            id: 1,
            name: 'John Doe',
        };
    });

    it('should return an object that has the `fillNumber` property', async () => {
        const result = await new GetLhcFillUseCase()
            .execute(getLhcFillDto);

        expect(result).to.have.ownProperty('fillNumber');
        expect(result.fillNumber).to.equal(1);
    });

    it('should return null with an invalid id', async () => {
        getLhcFillDto.params.fillNumber = 9999;
        const result = await new GetLhcFillUseCase()
            .execute(getLhcFillDto);
        expect(result).to.equal(null);
    });
};
