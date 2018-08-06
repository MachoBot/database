import { PrimaryGeneratedColumn, Column, Entity } from "typeorm"
import { IsNumber } from "class-validator"

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
  @IsNumber()
  timestamp: number

  constructor () {
    this.xp = 0
    this.level = 0
    this.timestamp = new Date().getTime()
  }
}
