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

/**
 * RunDetectorsAdapter
 */
class RunDetectorsAdapter {
    /**
     * Converts the given database object to an entity object.
     *
     * @param {Object} databaseObject Object to convert.
     * @returns {Object} Converted entity object.
     */
    static toEntity({ runNumber, detectorId, quality }) {
        return { runNumber, detectorId, quality };
    }

    /**
     * Converts the given entity object to a database object.
     *
     * @param {Object} entityObject Object to convert.
     * @returns {Object} Converted database object.
     */
    static toDatabase({ runNumber, detectorId, quality }) {
        return { runNumber, detectorId, quality };
    }
}

module.exports = RunDetectorsAdapter;