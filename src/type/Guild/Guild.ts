import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { IsString, IsBoolean, IsNumberString } from 'class-validator'
import { GuildSettings, GuildTag } from '.'

@Entity()
export class Guild {
  @PrimaryColumn()
  @IsString()
  id: string

  @Column('varchar')
  @IsString()
  name: string

  @Column('boolean')
  @IsBoolean()
  banned: boolean

  @Column('varchar')
  @IsNumberString()
  dateCreated: string

  @OneToOne(type => GuildSettings, guildSettings => guildSettings.guild, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  settings: GuildSettings

  @OneToMany(type => GuildTag, guildTag => guildTag.guild, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  tags: GuildTag[]

  constructor (guild?: Guild) {
    if (guild) {
      Object.assign(this, guild)
    }

    this.dateCreated = new Date().getTime().toString()
  }
}
