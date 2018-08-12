import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import { IsString } from 'class-validator'
import { Guild } from '.'

@Entity()
export class GuildSettings {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  @IsString()
  suggestionChannel: string

  @Column('varchar')
  @IsString()
  musicChannel: string

  @Column('varchar')
  @IsString()
  logChannel: string

  @OneToOne(type => Guild, guild => guild.settings)
  guild: Guild

  constructor () {
    this.suggestionChannel = 'default'
    this.musicChannel = 'default'
    this.logChannel = 'default'
  }
}
