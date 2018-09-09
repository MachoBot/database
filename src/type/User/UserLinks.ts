import { PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn } from 'typeorm'
import { User, UserGithubLinks, UserSteamLinks } from '.'

@Entity()
export class UserLinks {
  @PrimaryGeneratedColumn() id: number

  @OneToOne(type => UserSteamLinks, userSteamLinks => userSteamLinks.links, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  steam: UserSteamLinks

  @OneToOne(type => UserGithubLinks, userGithubLinks => userGithubLinks.links, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  github: UserGithubLinks

  @OneToOne(type => User, user => user.links)
  user: User

  constructor () {
    this.github = new UserGithubLinks()
    this.steam = new UserSteamLinks()
  }
}
