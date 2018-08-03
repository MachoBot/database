import { Column, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

export class UserBalance {
  @PrimaryGeneratedColumn()id: number

  @Column('number')
  netWorth: number

  @Column('number')
  balance: number

  @Column('number')
  dateClaimedDailies: number

  @OneToOne(type => User, user => user.balance)
  @JoinColumn()
  user: User

  constructor () {
    this.netWorth = 0
    this.balance = 0
    this.dateClaimedDailies = new Date().getTime()
  }
}
