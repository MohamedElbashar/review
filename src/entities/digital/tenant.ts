//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('tenant')
export class tenant {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'name', nullable: false, type: 'varchar2', primary: false })
  name: string;
  @Column({ name: 'code', nullable: false, type: 'varchar2', primary: false })
  code: string;
  @Column({
    name: 'channel_type',
    nullable: true,
    precision: 1,
    scale: 0,
    type: 'number',
    default: 0,
    primary: false,
  })
  channel_type: number;
  @Column({ name: 'is_active', nullable: true, default: true, primary: false })
  is_active: boolean;
  @Column({ name: 'logo', nullable: true, type: 'clob', primary: false })
  logo: string;
  @Column({
    name: 'addl_details',
    nullable: true,
    type: 'clob',
    primary: false,
  })
  addl_details: string;
  @Column({
    name: 'created_date',
    nullable: true,
    type: 'timestamp with local time zone',
    primary: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_date: Date;
  @Column({
    name: 'updated_date',
    nullable: true,
    type: 'timestamp with time zone',
    primary: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_date: Date;
}
