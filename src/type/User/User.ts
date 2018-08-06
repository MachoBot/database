import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm"
import { IsString, IsBoolean, IsNumber } from 'class-validator'
import { UserBalance } from "./UserBalance"
import { UserLevel } from "./UserLevel"
import { UserLinks } from "./UserLinks";

@Entity()
export class User {
  @PrimaryColumn()
  @IsString()
  id: string

  @Column('varchar')
  @IsString()
  name: string

  @Column('varchar')
  @IsString()
  avatarUrl: string

  @Column('boolean')
  @IsBoolean()
  banned: boolean

  @Column('number')
  @IsNumber()
  dateCreated: number

  @Column('number')
  @IsNumber()
  dateLastMessage: number

  @OneToOne(type => UserBalance, userBalance => userBalance.user, {
    cascade: true
  })
  balance: UserBalance

  @OneToOne(type => UserLevel, userLevel => userLevel.user, {
    cascade: true
  })
  level: UserLevel

  @OneToOne(type => UserLinks, userLinks => userLinks.user, {
    cascade: true
  })
  links: UserLinks

  @Column('boolean')
  @IsBoolean()
  admin: boolean

  @Column('varchar')
  @IsString()
  accessToken: string

  constructor (user?: User) {
    if (user) {
      Object.assign(this, user)
    }
  }
}
