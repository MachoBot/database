import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from 'typeorm'
import { IsNumber, IsNumberString } from 'class-validator'
import { User } from '.'

@Entity()
export class UserLevel {
  @PrimaryGeneratedColumn() id: number

  @Column('integer')
  @IsNumber()
  xp: number

  @Column('integer')
  @IsNumber()
  level: number

  @Column('varchar')
  @IsNumberString()
  timestamp: string

  @OneToOne(type => User, user => user.balance)
  user: User

  constructor () {
    this.xp = 0
    this.level = 0
    this.timestamp = new Date().getTime().toString()
  }
}
