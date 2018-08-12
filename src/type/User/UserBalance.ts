import { Column, PrimaryGeneratedColumn, Entity, OneToOne } from 'typeorm'
import { User } from '.'

@Entity()
export class UserBalance {
  @PrimaryGeneratedColumn() id: number

  @Column('integer')
  netWorth: number

  @Column('integer')
  balance: number

  @Column('varchar', { nullable: true })
  dateClaimedDailies: string | null

  @OneToOne(type => User, user => user.balance)
  user: User

  constructor () {
    this.netWorth = 0
    this.balance = 0
    this.dateClaimedDailies = null
  }
}
