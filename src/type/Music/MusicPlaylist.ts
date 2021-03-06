import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm'
import { User } from '..'
import { MusicSong } from '.'
import { IsString } from 'class-validator'

@Entity()
export class MusicPlaylist {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar')
  @IsString()
  name: string

  @OneToMany(type => MusicSong, musicSong => musicSong.playlists, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  songs: MusicSong[]

  @ManyToOne(type => User, user => user.playlists)
  user: User

  constructor (playlist?: MusicPlaylist) {
    if (playlist) {
      Object.assign(this, playlist)
    }
  }
}
