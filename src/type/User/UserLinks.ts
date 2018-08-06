import { PrimaryGeneratedColumn, Column, Entity } from "typeorm"
import { IsString } from "class-validator"

@Entity()
export class UserLinks {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar')
  @IsString()
  steamId: string
}
