//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('policy_audit')
export class policy_audit {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'quote_id', nullable: false, type: 'number', primary: false })
  quote_id: number;
  @Column({
    name: 'product_id',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  product_id: string;
  @Column({
    name: 'piid',
    nullable: true,
    precision: 10,
    scale: 0,
    type: 'number',
    primary: false,
  })
  piid: number;
  @Column({
    name: 'eska_customer_id',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  eska_customer_id: string;
  @Column({
    name: 'eska_policy_id',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  eska_policy_id: string;
  @Column({
    name: 'eska_quote_id',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  eska_quote_id: string;
  @Column({
    name: 'eska_request',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  eska_request: string;
  @Column({
    name: 'eska_response',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  eska_response: string;
  @Column({
    name: 'eska_policy_no',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  eska_policy_no: string;
  @Column({
    name: 'najm_response',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  najm_response: string;
  @Column({
    name: 'notify_eska_responses',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  notify_eska_responses: string;
  @Column({
    name: 'generate_report_response',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  generate_report_response: string;
  @Column({
    name: 'created_date',
    nullable: true,
    type: 'timestamp',
    primary: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_date: Date;
  @Column({
    name: 'updated_at',
    nullable: true,
    type: 'timestamp',
    primary: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
