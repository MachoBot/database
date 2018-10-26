import { PrimaryColumn, Column, OneToOne, Entity, JoinColumn, OneToMany } from 'typeorm'
import { IsString, IsBoolean, IsNumberString } from 'class-validator'
import { UserBalance, UserLevel, UserLinks } from '.'
import { MusicPlaylist } from '..'

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
  @IsNumberString()
  dateCreated: string

  @Column('varchar')
  @IsNumberString()
  dateLastMessage: string

  @OneToOne(type => UserBalance, balance => balance.user, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  balance: UserBalance

  @OneToOne(type => UserLevel, level => level.user, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  level: UserLevel

  @OneToOne(type => UserLinks, links => links.user, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  links: UserLinks

  @OneToMany(type => MusicPlaylist, musicPlaylist => musicPlaylist.user, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  playlists: MusicPlaylist[]

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

    this.dateCreated = new Date().getTime().toString()
    this.dateLastMessage = new Date().getTime().toString()
  }
}
