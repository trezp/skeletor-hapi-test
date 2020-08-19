import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Kitty {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    description: string;

}
