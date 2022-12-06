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

import { SelectionModel } from '../SelectionModel.js';

/**
 * Model to handle the state of a tag picker
 */
export class PickerModel extends SelectionModel {
    /**
     * Constructor
     *
     * @param {SelectionOption[]} [defaultSelection=[]] the default selection
     * @param {boolean} [defaultCollapsed=true] If true, the options list will be collapsed by default
     * @constructor
     */
    constructor(defaultSelection = [], defaultCollapsed = true) {
        super({ defaultSelection });

        this._defaultCollapsed = defaultCollapsed;
        this._collapsed = defaultCollapsed;
    }

    /**
     * If the picker is collapsed expand it, else collapse it
     *
     * @return {void}
     */
    toggleCollapse() {
        this._collapsed = !this._collapsed;
        this.notify();
    }

    /**
     * Reset the model to its default state
     *
     * @return {void}
     */
    reset() {
        super.reset();
        this._collapsed = this._defaultCollapsed;
    }

    /**
     * Returns the collapse status
     *
     * @return {boolean} true if the picker is collapsed
     */
    get collapsed() {
        return this._collapsed;
    }
}