import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from "typeorm"
import { IsString } from "class-validator"
import { User } from "."

@Entity()
export class UserLinks {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar', { nullable: true })
  @IsString()
  steamId: string | null

  @OneToOne(type => User, user => user.balance)
  user: User
}
