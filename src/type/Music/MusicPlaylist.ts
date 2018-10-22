import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { User } from '..'
import { MusicSong } from '.'

@Entity()
export class MusicPlaylist {
  @PrimaryGeneratedColumn() id: number

  @OneToMany(type => MusicSong, musicSong => musicSong.playlists)
  songs: MusicSong[]

  @ManyToOne(type => User, user => user.playlists)
  user: User

  constructor (playlist?: MusicPlaylist) {
    if (playlist) {
      Object.assign(this, playlist)
    }
  }
}
