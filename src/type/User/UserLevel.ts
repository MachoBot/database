import { PrimaryGeneratedColumn, Column, OneToOne, Entity } from "typeorm"
import { IsNumber } from "class-validator"
import { User } from "./User"

@Entity()
export class UserLevel {
  @PrimaryGeneratedColumn() id: number

  @Column('number')
  @IsNumber()
  xp: number

  @Column('number')
  @IsNumber()
  level: number

  @Column('number')
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
