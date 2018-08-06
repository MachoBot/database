import { PrimaryGeneratedColumn, Column, OneToOne, Entity } from "typeorm"
import { IsNumber } from "class-validator"
import { User } from "./User"

@Entity()
export class UserLevel {
  @PrimaryGeneratedColumn() id: number

  @Column('integer')
  @IsNumber()
  xp: number

  @Column('integer')
  @IsNumber()
  level: number

  @Column('integer')
  @IsNumber()
  timestamp: number

  @OneToOne(type => User, user => user.level)
  user: User

  constructor () {
    this.xp = 0
    this.level = 0
    this.timestamp = new Date().getTime()
  }
}
