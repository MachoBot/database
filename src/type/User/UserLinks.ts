import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from "typeorm"
import { IsString } from "class-validator"
import { User } from "."

@Entity()
export class UserLinks {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar')
  @IsString()
  steamId: string

  @OneToOne(type => User, user => user.balance)
  user: User
}
