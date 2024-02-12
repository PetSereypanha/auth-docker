import {Column, CreateDateColumn, Generated, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

export abstract class BaseEntity {
    @ApiProperty({ description: 'Primary key as User ID', example: '3f06af63-a93c-11e4-9797-00505690773f' })
    @PrimaryColumn({type : 'uuid'})
    @Generated("uuid")
    id: string;

    @ApiProperty({description: 'When user was create'})
    @CreateDateColumn({type : 'timestamp with time zone'})
    createAt: Date;

    @ApiProperty({description: 'When user was update'})
    @UpdateDateColumn({type : 'timestamp with time zone'})
    updateAt: Date;
}
