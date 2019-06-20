/**
 * Application
 */
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import { AppRole } from './app-role';
import { IApplication } from '../../services/application.interface';

@Entity()
export class Application extends BaseEntity implements IApplication{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    title: string;

    @CreateDateColumn({
        type       : 'integer',
        transformer: {
            from: (value?: number) => value,
            to  : (value?: string) =>
                value === undefined || value === null ? (new Date()).getTime() : (new Date(value)).getTime()
        }
    })
    created_at: number;

    @Column('integer', { nullable: true })
    deleted_at: number;

    blocked_at: number;

    @UpdateDateColumn({ type: 'timestamp' })
    @Column('integer', { nullable: true })
    updated_at: number;

    trusted: boolean;

    client_id: string;

    client_secret: string;

    @OneToMany(type => AppRole, role => role.app)
    roles: AppRole[];
}
