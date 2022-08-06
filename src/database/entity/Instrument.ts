import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import {Content} from './Content';
import {User} from "./User";

@Entity('instruments')
export class Instrument extends Content {
    @Column({type: 'numeric', precision: 10, scale: 2})
    value: number;

    @Column()
    location: string;

    @Column()
    description: string;

    @ManyToOne(() => User, (user: User) => user.instruments)
    user: User

    @Column()
    notes: string
}

// TODO hook up new route for instrument
// TODO Make new controller/service for instruments
// TODO review how the manytoone relationship looks/works when adding an instrument.