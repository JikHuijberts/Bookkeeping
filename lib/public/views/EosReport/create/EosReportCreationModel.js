/**
 *  @license
 *  Copyright CERN and copyright holders of ALICE O2. This software is
 *  distributed under the terms of the GNU General Public License v3 (GPL
 *  Version 3), copied verbatim in the file "COPYING".
 *
 *  See http://alice-o2.web.cern.ch/license for full licensing information.
 *
 *  In applying this license CERN does not waive the privileges and immunities
 *  granted to it by virtue of its status as an Intergovernmental Organization
 *  or submit itself to any jurisdiction.
 */

import { RemoteData } from '/js/src/index.js';
import { getRemoteData } from '../../../utilities/fetch/getRemoteData.js';
import { CreationModel } from '../../../models/CreationModel.js';

/**
 * Model to store the EOS report creation page's state
 */
export class EosReportCreationModel extends CreationModel {
    /**
     * Constructor
     * @param {function} onCreationSuccess function called when the EOS report creation is successful, passing the created log ID as parameter
     */
    constructor(onCreationSuccess) {
        super('/api/eos-report?reportType=ECS', ({ id }) => onCreationSuccess(id));

        this._currentShiftData = RemoteData.notAsked();
        this.fetchShiftData();
    }

    /**
     * Fetch the current shift data
     * @return {void}
     */
    fetchShiftData() {
        this._currentShiftData = RemoteData.loading();
        this.notify();

        getRemoteData('/api/shift-data?shiftType=ECS').then(
            ({ data }) => {
                this._currentShiftData = RemoteData.success(data);
                this.notify();
            },
            (errors) => {
                this._currentShiftData = RemoteData.failure(errors);
                this.notify();
            },
        );
    }

    /**
     * Returns the data corresponding to the current shift
     * @return {RemoteData} the current shift data
     */
    get currentShiftData() {
        return this._currentShiftData;
    }

    // eslint-disable-next-line valid-jsdoc
    /**
     * @inheritDoc
     */
    _initOrResetData() {
        /**
         * No need for a class for now
         * If fields need complex verification/formatting or anything else use a class
         *
         * @type {Partial<EosReportCreationRequest>}
         */
        this.data = {
            typeSpecific: null,
        };
    }

    // eslint-disable-next-line valid-jsdoc
    /**
     * @inheritDoc
     */
    _getSerializableData() {
        return this.data;
    }
}