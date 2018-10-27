import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Guild } from '.'

@Entity()
export class GuildTag {
  @PrimaryGeneratedColumn()
  id: number

  @Column('varchar')
  name: string

  @Column('varchar')
  content: string

  @ManyToOne(type => Guild, guild => guild.tags)
  guild: Guild

  constructor (guildTag?: GuildTag) {
    if (guildTag) {
      Object.assign(this, guildTag)
    }
  }
}
