import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm"
import { IsString, IsBoolean, IsNumber } from 'class-validator'
import { UserBalance, UserLevel, UserLinks } from "."

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

  @Column('integer')
  @IsNumber()
  dateCreated: number

  @Column('integer')
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

  @Column('varchar', {
    select: false
  })
  @IsString()
  accessToken: string

  constructor (user?: User) {
    if (user) {
      Object.assign(this, user)
    }
  }
}
