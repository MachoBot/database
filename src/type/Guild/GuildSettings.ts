import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import { Guild } from '.'

@Entity()
export class GuildSettings {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar', { nullable: true })
  suggestionChannel: string | null

  @Column('varchar', { nullable: true })
  musicTextChannel: string | null

  @Column('varchar', { nullable: true })
  musicVoiceChannel: string | null

  @Column('varchar', { nullable: true })
  logChannel: string | null

  @Column('boolean')
  levelUpMessages: boolean

  @OneToOne(type => Guild, guild => guild.settings)
  guild: Guild

  constructor () {
    this.suggestionChannel = null
    this.musicTextChannel = null
    this.musicVoiceChannel = null
    this.logChannel = null
    this.levelUpMessages = true
  }
}
