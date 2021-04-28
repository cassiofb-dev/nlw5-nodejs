import { Entity, PrimaryColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { v4 as uuid_v4 } from "uuid";

@Entity("settings")
class Setting {

  @PrimaryColumn()
  id!: string;

  @Column()
  username!: string;

  @Column()
  chat!: boolean;

  @UpdateDateColumn()
  updated_at!: Date;

  @CreateDateColumn()
  created_at!: Date;

  constructor() {
    if (!this.id) this.id = uuid_v4();
  }

}

export default Setting;