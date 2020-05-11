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

const { Log } = require('../../domain/entities');

/**
 * LogAdapter
 */
class LogAdapter {
    /**
     * Converts the given database object to an entity object.
     *
     * @param {Object} databaseObject Object to convert.
     * @returns {Object} Converted entity object.
     */
    static toEntity(databaseObject) {
        return Object.assign(new Log(), {
            entryId: databaseObject.id,
            authorID: 'Batman',
            title: databaseObject.title,
            creationTime: new Date(databaseObject.createdAt).getTime(),
            tags: [`Tag${databaseObject.id}`, `Tag${++databaseObject.id}`],
            origin: databaseObject.origin,
            content: [
                { content: 'Batman wrote this...', sender: 'Batman' },
                { content: 'Nightwing wrote this...', sender: 'Nightwing' },
                { content: 'Gordon wrote this...', sender: 'Commissioner Gordon' },
            ],
        });
    }

    /**
     * Converts the given entity object to a database object.
     *
     * @param {Object} entityObject Object to convert.
     * @returns {Object} Converted database object.
     */
    static toDatabase(entityObject) {
        return {
            id: entityObject.entryId,
            title: entityObject.title,
            subtype: 'run',
            origin: 'process',
            userId: 1,
            text: 'Yet another log',
        };
    }
}

module.exports = LogAdapter;