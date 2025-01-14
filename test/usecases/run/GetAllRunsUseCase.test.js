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

const { run: { GetAllRunsUseCase } } = require('../../../lib/usecases');
const { dtos: { GetAllRunsDto } } = require('../../../lib/domain');
const chai = require('chai');
const { catchAsyncError } = require('../../testUtilities/catchAsyncError.js');

const { expect } = chai;

module.exports = () => {
    let getAllRunsDto;

    beforeEach(async () => {
        getAllRunsDto = await GetAllRunsDto.validateAsync({});
    });
    it('should return an array', async () => {
        const { runs } = await new GetAllRunsUseCase()
            .execute();

        expect(runs).to.be.an('array');
    });
    it('should return an array limited to default 100 with runs', async () => {
        getAllRunsDto.query = {};
        const { runs } = await new GetAllRunsUseCase()
            .execute(getAllRunsDto);
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(100);
    });
    it('should return an array, only containing runs with specified run number', async () => {
        getAllRunsDto.query = { filter: { runNumbers: '17,18' } };
        const { runs } = await new GetAllRunsUseCase().execute(getAllRunsDto);

        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(2);
        expect(runs[0].runNumber).to.equal(18); // Default sorting order is dsc
        expect(runs[1].runNumber).to.equal(17);
    });

    it('should return an array, only containing found runs from passed list (run numbers can be missing or non-numbers)', async () => {
        getAllRunsDto.query = { filter: { runNumbers: '-2,17, ,400,18' } };
        const { runs } = await new GetAllRunsUseCase().execute(getAllRunsDto);

        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(2);
        expect(runs[0].runNumber).to.equal(18); // Default sorting order is dsc
        expect(runs[1].runNumber).to.equal(17);
    });

    it('should return an array, only containing runs with dcs true', async () => {
        getAllRunsDto.query = { filter: { dcs: true } };
        const { runs } = await new GetAllRunsUseCase()
            .execute(getAllRunsDto);

        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(1);
    });
    it('should return an array with default limit 100, only containing runs with dcs false or null', async () => {
        getAllRunsDto.query = { filter: { dcs: false } };
        const { runs } = await new GetAllRunsUseCase()
            .execute(getAllRunsDto);

        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(100);
    });
    it('should return an array with specified limit, only containing runs with dcs false or null', async () => {
        getAllRunsDto.query = { filter: { dcs: false }, page: { limit: 15 } };
        const { runs } = await new GetAllRunsUseCase()
            .execute(getAllRunsDto);

        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(15);
    });
    it('should return an array with only runs with dd_flp false or null', async () => {
        getAllRunsDto.query = { filter: { ddflp: false }, page: { limit: 25 } };
        const { runs } = await new GetAllRunsUseCase()
            .execute(getAllRunsDto);

        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(7);
    });
    it('should return an array only containing runs with ddflp true', async () => {
        getAllRunsDto.query = { filter: { ddflp: true }, page: { limit: 10, offset: 10 } };
        const { runs } = await new GetAllRunsUseCase()
            .execute(getAllRunsDto);

        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(10);
        expect(runs[0].runNumber).to.equal(96);
    });
    it('should return an array, only containing runs with epn true', async () => {
        getAllRunsDto.query = { filter: { epn: true } };
        const { runs } = await new GetAllRunsUseCase()
            .execute(getAllRunsDto);

        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(100);
    });
    it('should return an array with default limit 100, only containing runs with dcs false or null', async () => {
        getAllRunsDto.query = { filter: { epn: false } };
        const { runs } = await new GetAllRunsUseCase()
            .execute(getAllRunsDto);

        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(2);
    });
    it('should return an array with runs on certain timestamps', async () => {
        getAllRunsDto.query = {
            filter: {
                o2start: {
                    from: 1647730800000,
                    to: 1648162799999,
                },
                o2end: {
                    from: 1647781200000,
                    to: 1648162799999,
                },
            },
        };
        const { runs } = await new GetAllRunsUseCase()
            .execute(getAllRunsDto);
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(1);
        expect(runs[0].runNumber).to.equal(1);
    });
    it('should return an array with only from values given', async () => {
        getAllRunsDto.query = {
            filter: {
                o2start: {
                    from: 1647730800000,
                },
                o2end: {
                    from: 1647781200000,
                },
            },
        };
        const { runs } = await new GetAllRunsUseCase()
            .execute(getAllRunsDto);
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(1);
        expect(runs[0].runNumber).to.equal(1);
    });

    it('should return an array with only to values given', async () => {
        getAllRunsDto.query = {
            filter: {
                o2start: {
                    to: 1648162799999,
                },
                o2end: {
                    to: 1648162799999,
                },
            },
        };
        const { runs } = await new GetAllRunsUseCase()
            .execute(getAllRunsDto);
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(100);
    });

    it('should throw error on invalid nDetectors filter', async () => {
        getAllRunsDto.query = {
            filter: {
                nDetectors: 'invalid',
            },
        };

        const getAllRunsUseCase = new GetAllRunsUseCase();
        const expectedToThrow = getAllRunsUseCase.execute.bind(getAllRunsUseCase, getAllRunsDto);

        let error = await catchAsyncError(expectedToThrow);
        expect(error).to.be.not.null;
        expect(error.message).to.equal('Unhandled operator: undefined');

        getAllRunsDto.query.filter.nDetectors = { operator: 'invalid' };
        error = await catchAsyncError(expectedToThrow);
        expect(error).to.be.not.null;
        expect(error.message).to.equal('Unhandled operator: invalid');
    });

    it('should successfully filter on detectors number', async () => {
        const nDetectors = {
            operator: '<',
            limit: 3,
        };
        getAllRunsDto.query = { filter: { nDetectors } };

        let { runs } = await new GetAllRunsUseCase().execute(getAllRunsDto);
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(0);

        nDetectors.operator = '<=';
        ({ runs } = await new GetAllRunsUseCase().execute(getAllRunsDto));
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(54);
        expect(runs.every((run) => run.nDetectors <= 3)).to.be.true;

        nDetectors.operator = '=';
        ({ runs } = await new GetAllRunsUseCase().execute(getAllRunsDto));
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(54);
        expect(runs.every((run) => run.nDetectors === 3)).to.be.true;

        nDetectors.limit = 6;
        nDetectors.operator = '>=';
        ({ runs } = await new GetAllRunsUseCase().execute(getAllRunsDto));
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(52);
        expect(runs.every((run) => run.nDetectors >= 6)).to.be.true;

        nDetectors.operator = '>';
        ({ runs } = await new GetAllRunsUseCase().execute(getAllRunsDto));
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(0);
    });

    it('should throw error on invalid nFlps filter', async () => {
        getAllRunsDto.query = {
            filter: {
                nFlps: 'invalid',
            },
        };

        const getAllRunsUseCase = new GetAllRunsUseCase();
        const expectedToThrow = getAllRunsUseCase.execute.bind(getAllRunsUseCase, getAllRunsDto);

        let error = await catchAsyncError(expectedToThrow);
        expect(error).to.be.not.null;
        expect(error.message).to.equal('Unhandled operator: undefined');

        getAllRunsDto.query.filter.nFlps = { operator: 'invalid' };
        error = await catchAsyncError(expectedToThrow);
        expect(error).to.be.not.null;
        expect(error.message).to.equal('Unhandled operator: invalid');
    });

    it('should successfully filter on flps number', async () => {
        const nFlps = {
            operator: '<',
            limit: 10,
        };
        getAllRunsDto.query = { filter: { nFlps } };

        let { runs } = await new GetAllRunsUseCase().execute(getAllRunsDto);
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(0);

        nFlps.operator = '<=';
        ({ runs } = await new GetAllRunsUseCase().execute(getAllRunsDto));
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(5);
        expect(runs.every((run) => run.nFlps <= 10)).to.be.true;

        nFlps.operator = '=';
        ({ runs } = await new GetAllRunsUseCase().execute(getAllRunsDto));
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(5);
        expect(runs.every((run) => run.nFlps === 10)).to.be.true;

        nFlps.limit = 12;
        nFlps.operator = '>=';
        ({ runs } = await new GetAllRunsUseCase().execute(getAllRunsDto));
        expect(runs).to.be.an('array');
        // 100 is the limit per page, true result must be 101
        expect(runs).to.have.lengthOf(100);
        expect(runs.every((run) => run.nFlps >= 12)).to.be.true;

        nFlps.operator = '>';
        ({ runs } = await new GetAllRunsUseCase().execute(getAllRunsDto));
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(0);
    });

    it('should successfully return an array, only containing runs found from passed list', async () => {
        getAllRunsDto.query = {
            filter: {
                environmentIds: '-1,ABCDEFGHIJ, , 0987654321,10',
            },
        };
        const { runs } = await new GetAllRunsUseCase().execute(getAllRunsDto);
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(10);
        expect(runs.every((run) => ['0987654321', 'ABCDEFGHIJ'].includes(run.environmentId))).to.be.true;
    });

    it('should successfully return an empty array of runs for invalid environments', async () => {
        getAllRunsDto.query = {
            filter: {
                environmentIds: 'DO-NOT-EXISTS',
            },
        };
        const { runs } = await new GetAllRunsUseCase().execute(getAllRunsDto);
        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(0);
    });

    it('should successfully return an array containing only runs with specified run qualities', async () => {
        const requiredQualities = ['bad', 'test'];
        getAllRunsDto.query = { filter: { runQualities: requiredQualities }, page: { limit: 100 } };
        const { runs } = await new GetAllRunsUseCase()
            .execute(getAllRunsDto);

        expect(runs).to.be.an('array');
        expect(runs).to.have.lengthOf(46);
        expect(runs.every((run) => requiredQualities.includes(run.runQuality))).to.be.true;
    });
};
