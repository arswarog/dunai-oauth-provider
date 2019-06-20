/**
 *
 */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AdminLog extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column('text')
    public action: string;
}
