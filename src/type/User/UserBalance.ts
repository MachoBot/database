import { Column, OneToOne, JoinColumn, PrimaryGeneratedColumn, Entity } from "typeorm"
import { User } from "./User"

@Entity()
export class UserBalance {
  @PrimaryGeneratedColumn() id: number

  @Column('integer')
  netWorth: number

  @Column('integer')
  balance: number

  @Column('integer')
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
