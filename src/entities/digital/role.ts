//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('role')
export class role {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'name', nullable: false, type: 'varchar2', primary: false })
  name: string;
  @Column({
    name: 'tenant_id',
    nullable: false,
    type: 'number',
    primary: false,
  })
  tenant_id: number;
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
    type: 'timestamp with time zone',
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
