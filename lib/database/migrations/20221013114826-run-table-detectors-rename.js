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

'use strict';

module.exports = {
    up: async ({ context: { queryInterface, _Sequelize } }) =>
        queryInterface.sequelize.transaction((transaction) =>
            Promise.all([queryInterface.renameColumn('runs', 'detectors', 'concatenated_detectors', { transaction })])),
    down: async ({ context: { queryInterface } }) =>
        queryInterface.sequelize.transaction((transaction) =>
            Promise.all([queryInterface.renameColumn('runs', 'concatenated_detectors', 'detectors', { transaction })])),
};