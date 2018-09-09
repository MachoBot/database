import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from 'typeorm'
import { IsString } from 'class-validator'
import { UserLinks } from '.'

@Entity()
export class UserSteamLinks {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar', { nullable: true })
  @IsString()
  userId: string | null

  @Column('varchar', { nullable: true, select: false })
  @IsString()
  token: string | null

  @OneToOne(type => UserLinks, userLinks => userLinks.steam)
  links: UserLinks

  constructor () {
    this.userId = null
    this.token = null
  }
}
