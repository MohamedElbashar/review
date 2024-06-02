//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('driver')
export class driver {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'id_type', nullable: false, type: 'number', primary: false })
  id_type: number;
  @Column({ name: 'id_no', nullable: false, type: 'varchar2', primary: false })
  id_no: string;
  @Column({ name: 'quote_id', nullable: false, type: 'number', primary: false })
  quote_id: number;
  @Column({
    name: 'first_name',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  first_name: string;
  @Column({
    name: 'last_name',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  last_name: string;
  @Column({
    name: 'addl_details',
    nullable: true,
    type: 'clob',
    default: '{}',
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
