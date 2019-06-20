import { createApp } from '@dunai/server';
import { App } from './app';

const app = createApp(App);

import { createConnections } from 'typeorm';
import { AdminLog } from '../models/sqlite/admin-log';
import { Application } from '../models/sqlite/application';
import { AppRole } from '../models/sqlite/app-role';

createConnections().then(
    async connection => {
        console.log('ok');

        const a = new Application();
        a.title = 'asdas';

        a.roles = [
            new AppRole({}),
            new AppRole({})
        ];

        console.log('save', a);

        await a.save();
        await Promise.all(
            a.roles.map(role => {
                role.app = a;
                return role.save();
            })
        );

        console.log('afte', a);
        const b = await Application.findOne(a.id, { relations: ['roles'] });

        console.log('load', b);


        const roles = await AppRole.find();

        console.log(roles);

    },
    error => {
        console.log('error', error);
    }
);
