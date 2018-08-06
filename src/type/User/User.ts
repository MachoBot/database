import { PrimaryColumn, Column, OneToOne, Entity, JoinColumn } from "typeorm"
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

  @Column('varchar')
  @IsNumber()
  dateCreated: number

  @Column('varchar')
  @IsNumber()
  dateLastMessage: number

  @OneToOne(type => UserBalance, {
    cascade: true
  })
  @JoinColumn()
  balance: UserBalance

  @OneToOne(type => UserLevel, {
    cascade: true
  })
  @JoinColumn()
  level: UserLevel

  @OneToOne(type => UserLinks, {
    cascade: true
  })
  @JoinColumn()
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
