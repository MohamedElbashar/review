//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('payer_details')
export class payer_details {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'name', nullable: false, type: 'varchar2', primary: false })
  name: string;
  @Column({ name: 'email', nullable: false, type: 'varchar2', primary: false })
  email: string;
  @Column({
    name: 'phone_no',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  phone_no: string;
  @Column({
    name: 'customer_id_no',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  customer_id_no: string;
  @Column({
    name: 'source_id_no',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  source_id_no: string;
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
