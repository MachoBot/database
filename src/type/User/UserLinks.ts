import { PrimaryGeneratedColumn, Column, OneToOne, Entity } from "typeorm"
import { IsString } from "class-validator"
import { User } from "./User"

@Entity()
export class UserLinks {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar')
  @IsString()
  steamId: string

  @OneToOne(type => User, user => user.links)
  user: User
}
