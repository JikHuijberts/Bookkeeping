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
 * Method to receive the list of active columns for a generic Environments component
 * @param {Object} _model The global model object
 * @return {Object} A collection of columns.
 */
const activeColumns = (_model) => ({
    id: {
        name: 'Id',
        size: 'w-10',
        visible: true,
        primary: true,
        title: true,
    },
    updatedAt: {
        name: 'Updated At',
        visible: true,
        sortable: false,
        title: true,
        size: 'w-15',
        format: (date) =>
            date ? new Date(date).toLocaleString('en-GB', { timeStyle: 'medium', dateStyle: 'medium' }) : '-',
    },
    createdAt: {
        name: 'Created At',
        visible: true,
        sortable: false,
        title: true,
        size: 'w-15',
        format: (date) =>
            date ? new Date(date).toLocaleString('en-GB', { timeStyle: 'medium', dateStyle: 'medium' }) : '-',
    },

    /*
     * ToredownAt: {
     *     name: 'Toredown At',
     *     visible: true,
     *     sortable: false,
     *     title: true,
     *     size: 'w-15',
     *     format: (date) =>
     *         date ? new Date(date).toLocaleString('en-GB', { timeStyle: 'medium', dateStyle: 'medium' }) : '-',
     * },
     */
    status: {
        name: 'Status',
        visible: true,
        sortable: false,
        title: true,
        size: 'w-10',
    },
    statusMessage: {
        name: 'Status Message',
        visible: true,
        sortable: false,
        size: 'w-45',
        title: true,
        format: (message) =>
            message ? message : '-',
        balloon: true,
    },
    runs: {
        name: 'Runs',
        visible: true,
        sortable: false,
        size: 'w-5',
        title: true,
        format: (runs) => runs && runs.length > 0 ? runs.map(({ runNumber }) => runNumber).join(', ') : '-',
        balloon: true,
    },

});

export default activeColumns;
