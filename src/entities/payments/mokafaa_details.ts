//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('mokafaa_details')
export class mokafaa_details {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({
    name: 'payer_id',
    nullable: false,
    precision: 10,
    scale: 0,
    type: 'number',
    primary: false,
  })
  payer_id: number;
  @Column({
    name: 'checkout_id',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  checkout_id: string;
  @Column({
    name: 'redemption_phone_no',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  redemption_phone_no: string;
  @Column({
    name: 'otp_token',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  otp_token: string;
  @Column({
    name: 'status_code',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  status_code: string;
  @Column({
    name: 'error_message',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  error_message: string;
  @Column({
    name: 'outstanding_amount',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  outstanding_amount: string;
  @Column({
    name: 'mokafaa_points',
    nullable: true,
    type: 'int',
    primary: false,
  })
  mokafaa_points: number;
  @Column({ name: 'reverse_points', nullable: true, primary: false })
  reverse_points: boolean;
  @Column({
    name: 'address_line',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  address_line: string;
  @Column({
    name: 'request_id',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  request_id: string;
  @Column({
    name: 'transaction_id',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  transaction_id: string;
  @Column({
    name: 'creation_date',
    nullable: true,
    type: 'timestamp',
    primary: false,
  })
  creation_date: Date;
  @Column({
    name: 'updated_date',
    nullable: true,
    type: 'timestamp',
    primary: false,
  })
  updated_date: Date;
}
