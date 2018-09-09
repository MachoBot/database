import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from 'typeorm'
import { IsString } from 'class-validator'
import { UserLinks } from '.'

@Entity()
export class UserGithubLinks {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar', { nullable: true })
  @IsString()
  username: string | null

  @Column('varchar', { nullable: true, select: false })
  @IsString()
  token: string | null

  @OneToOne(type => UserLinks, userLinks => userLinks.github)
  links: UserLinks

  constructor () {
    this.username = null
    this.token = null
  }
}
