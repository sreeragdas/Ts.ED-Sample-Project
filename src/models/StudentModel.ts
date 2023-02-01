import {Property} from "@tsed/schema";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class StudentModel {
  @Property()
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name:string

  @Column()
  address:string

  @Column()
  class:string

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
