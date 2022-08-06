import {Entity, Column, OneToMany} from "typeorm"
import {Instrument} from "./Instrument";
import {Content} from "./Content";

@Entity('users')
export class User extends Content {

    @Column()
    first_name: string

    @Column()
    last_name: string

    @OneToMany(() => Instrument, (instrument) => instrument.user)
    instruments: Instrument[]
}
