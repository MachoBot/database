import { Column, PrimaryGeneratedColumn, Entity } from "typeorm"

@Entity()
export class UserBalance {
  @PrimaryGeneratedColumn() id: number

  @Column('integer')
  netWorth: number

  @Column('integer')
  balance: number

  @Column('integer')
  dateClaimedDailies: number

  constructor () {
    this.netWorth = 0
    this.balance = 0
    this.dateClaimedDailies = new Date().getTime()
  }
}
