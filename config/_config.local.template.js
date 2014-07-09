/*
 * Copyright 2014 The MITRE Corporation, All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this work except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * author Dave Bryson
 *
 */
'use strict';

/**
 * Template for local configuration file
 * @type {{sessionSecret: string, sendmail: boolean, smtp: {username: string, password: string}, admincontact: string, openstack: {authUrl: string, username: string, password: string, tenantId: string, tenantName: string, region: string}}}
 */
module.exports = {
    sessionSecret: 'make this a long secret',

    sendmail: true,
    smtp: {username: '', password: ''},
    admincontact: 'someone@mitre.org',

    volumeSnapId: '',
    volumeDefaultSize: 6,

    openstack: {
        authUrl: 'http://localhost:5000/',
        username: 'test',
        password: 'test',
        tenantId: '0123456789abcdef0123456789abcdef',
        tenantName: 'test',
        region: 'RegionOne'
    }
};
