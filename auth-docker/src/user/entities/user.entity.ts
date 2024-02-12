import {Column, Entity} from "typeorm";
import {ApiHideProperty, ApiProperty} from "@nestjs/swagger";
import {BaseEntity} from "../../base-entity/base-entity";

export enum Role {
    User = 'USER',
    MEMBER = 'MEMBER',
    ADMIN = 'ADMIN',
}

@Entity({name: 'users'})
export class User extends BaseEntity{

    @ApiProperty({
        description: 'User Email Address',
        example: 'serey@gmai.coom'
    })
    @Column({
        unique: true
    })
    email: string;

    @ApiProperty({
        description: 'Hashed user password'
    } )
    @Column({
        nullable: true,
    })
    @ApiHideProperty()
    password: string;

    @ApiProperty({
        description: 'When user was delete'
    })
    @Column({
        nullable: true,
        type: 'timestamp with time zone'
    })
    deleteAt: Date;

}
