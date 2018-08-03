import { PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { IsString } from "class-validator"
import { User } from "./User"

export class UserLinks {
  @PrimaryGeneratedColumn() id: number

  @Column('string')
  @IsString()
  steamId: string

  @OneToOne(type => User, user => user.links)
  user: User
}
