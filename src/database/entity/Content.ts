import {PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';

export abstract class Content {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    created_at: Date

}
