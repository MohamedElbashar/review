//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('payment_audit')
export class payment_audit {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({
    name: 'source_id_no',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  source_id_no: string;
  @Column({
    name: 'api_name',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  api_name: string;
  @Column({
    name: 'device_type',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  device_type: string;
  @Column({
    name: 'ip_address',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  ip_address: string;
  @Column({
    name: 'request',
    nullable: true,
    type: 'clob',
    default: '{}',
    primary: false,
  })
  request: string;
  @Column({
    name: 'response',
    nullable: true,
    type: 'clob',
    default: '{}',
    primary: false,
  })
  response: string;
  @Column({
    name: 'request_time',
    nullable: true,
    type: 'timestamp with time zone',
    primary: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  request_time: Date;
  @Column({
    name: 'response_time',
    nullable: true,
    type: 'timestamp with time zone',
    primary: false,
  })
  response_time: Date;
  @Column({
    name: 'response_code',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  response_code: string;
  @Column({
    name: 'error_message',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  error_message: string;
  @Column({
    name: 'addl_details',
    nullable: true,
    type: 'clob',
    default: '{}',
    primary: false,
  })
  addl_details: string;
}
