/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const ConnectionManager = require('../lib/connectionmanager');
const ConnectionProfileManager = require('../lib/connectionprofilemanager');

const chai = require('chai');
chai.should();
chai.use(require('chai-as-promised'));
const sinon = require('sinon');

describe('ConnectionManager', () => {

    let mockConnectionProfileManager;
    let connectionManager;

    beforeEach(() => {
        mockConnectionProfileManager = sinon.createStubInstance(ConnectionProfileManager);
        connectionManager = new ConnectionManager(mockConnectionProfileManager);
    });

    describe('#constructor', () => {

        it('should throw if no connection profile manager', () => {
            (() => {
                new ConnectionManager(null);
            }).should.throw(/Must create ConnectionManager with a ConnectionProfileManager/);
        });

    });

    describe('#getConnectionProfileManager', () => {

        it('should get connection profile manager', () => {
            connectionManager.getConnectionProfileManager().should.equal(mockConnectionProfileManager);
        });

    });

    describe('#connect', () => {

        it('should throw as abstract', async () => {
            await connectionManager.connect('hlfabric', 'org-acme-biznet', { connect: 'options' })
                .should.be.rejectedWith(/abstract function called/);
        });

    });

    describe('#importIdentity', () => {

        it('should throw as abstract', async () => {
            await connectionManager.importIdentity('profile', { connect: 'options' }, 'bob1', 'public key', 'private key')
                .should.be.rejectedWith(/abstract function called/);
        });

    });

    describe('#removeIdentity', () => {

        it('should throw as abstract', async () => {
            await connectionManager.removeIdentity('profile', { connect: 'options' }, 'bob1')
                .should.be.rejectedWith(/abstract function called/);
        });

    });

    describe('#requestIdentity', () => {

        it('should throw as abstract', async () => {
            await connectionManager.requestIdentity('profile', { connect: 'options' }, 'bob1', 'secret')
                .should.be.rejectedWith(/abstract function called/);
        });

    });

    describe('#exportIdentity', () => {

        it('should throw as abstract', async () => {
            await connectionManager.exportIdentity('PROFILE_NAME', { connect: 'options' }, 'Eric')
                .should.be.rejectedWith(/abstract function called/);
        });

    });

});
