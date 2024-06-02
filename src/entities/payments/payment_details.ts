//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('payment_details')
export class payment_details {
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
    name: 'amount',
    nullable: false,
    precision: 10,
    scale: 2,
    type: 'number',
    primary: false,
  })
  amount: number;
  @Column({
    name: 'checkout_id',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  checkout_id: string;
  @Column({
    name: 'callback_url',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  callback_url: string;
  @Column({
    name: 'payment_method',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  payment_method: string;
  @Column({
    name: 'currency',
    nullable: true,
    type: 'varchar2',
    default: 'SAR',
    primary: false,
  })
  currency: string;
  @Column({
    name: 'txn_ref_number',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  txn_ref_number: string;
  @Column({
    name: 'sadaad_ref_number',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  sadaad_ref_number: string;
  @Column({
    name: 'payment_date',
    nullable: true,
    type: 'timestamp with time zone',
    primary: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  payment_date: Date;
  @Column({
    name: 'payment_status',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  payment_status: string;
  @Column({
    name: 'payment_initiation_time',
    nullable: true,
    type: 'timestamp with time zone',
    primary: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  payment_initiation_time: Date;
  @Column({
    name: 'payment_completion_time',
    nullable: true,
    type: 'timestamp with time zone',
    primary: false,
  })
  payment_completion_time: Date;
  @Column({
    name: 'creation_date',
    nullable: true,
    type: 'timestamp with time zone',
    primary: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  creation_date: Date;
  @Column({
    name: 'updated_date',
    nullable: true,
    type: 'timestamp with time zone',
    primary: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_date: Date;
  @Column({
    name: 'hyperpay_checkout_id',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  hyperpay_checkout_id: string;
  @Column({
    name: 'transaction_receipt',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  transaction_receipt: string;
  @Column({
    name: 'urpay_security_token',
    nullable: true,
    type: 'clob',
    primary: false,
  })
  urpay_security_token: string;
  @Column({
    name: 'urpay_session_id',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  urpay_session_id: string;
  @Column({
    name: 'urpay_verification_token',
    nullable: true,
    type: 'clob',
    primary: false,
  })
  urpay_verification_token: string;
  @Column({
    name: 'urpay_otp_reference',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  urpay_otp_reference: string;
  @Column({
    name: 'loyality_level',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  loyality_level: string;
  @Column({
    name: 'unique_account_identifier',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  unique_account_identifier: string;
  @Column({
    name: 'registered_since',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  registered_since: string;
  @Column({
    name: 'tabby_checkout_id',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  tabby_checkout_id: string;
  @Column({
    name: 'voucher_code',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  voucher_code: string;
  @Column({
    name: 'national_id',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  national_id: string;
  @Column({
    name: 'application_id',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  application_id: string;
  @Column({
    name: 'sadad_bill_no',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  sadad_bill_no: string;
}
