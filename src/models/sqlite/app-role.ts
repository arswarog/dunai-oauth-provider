/**
 * Defined role in application
 */
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Application } from './application';
import { IAppRole } from '../../services/application.interface';

@Entity()
export class AppRole extends BaseEntity implements IAppRole {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => Application)
    @JoinColumn()
    app: Application;

    @Column('text')
    name: string;

    @Column('text')
    title: string;

    @Column('text')
    description: string;

    constructor(props: any) {
        super();
        if (props)
            Object.assign(this, props);
    }

}
