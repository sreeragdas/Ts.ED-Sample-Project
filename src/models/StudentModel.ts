import {Property} from "@tsed/schema";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('student')
export class StudentModel extends BaseEntity {
  @Property()
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({nullable:true , default:null})
  name:string

  @Column({nullable:true , default:null})
  address!:string

  @Column({nullable:true , default:null})
  class!:string

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;
}
