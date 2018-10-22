import { PrimaryColumn, Column, Entity, ManyToOne } from 'typeorm'
import { MusicPlaylist } from '.'
import { IsString } from 'class-validator'

@Entity()
export class MusicSong {
  @PrimaryColumn('varchar') id: string

  @Column('varchar')
  @IsString()
  title: string

  @Column('varchar')
  @IsString()
  url: string

  @ManyToOne(type => MusicPlaylist, musicPlaylist => musicPlaylist.songs)
  playlists: MusicPlaylist

  constructor (song?: MusicSong) {
    if (song) {
      Object.assign(this, song)
    }
  }
}
