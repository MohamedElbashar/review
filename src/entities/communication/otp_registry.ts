//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('otp_registry')
export class otp_registry {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'tx_id', nullable: false, type: 'varchar2', primary: false })
  tx_id: string;
  @Column({
    name: 'otp_type',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  otp_type: string;
  @Column({ name: 'otp', nullable: false, type: 'varchar2', primary: false })
  otp: string;
  @Column({
    name: 'reciever_id',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  reciever_id: string;
  @Column({
    name: 'purpose_code',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  purpose_code: string;
  @Column({
    name: 'generated_at',
    nullable: true,
    type: 'timestamp with time zone',
    primary: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  generated_at: Date;
  @Column({
    name: 'expires_at',
    nullable: false,
    type: 'timestamp with time zone',
    primary: false,
  })
  expires_at: Date;
  @Column({
    name: 'retries',
    nullable: true,
    precision: 1,
    scale: 0,
    type: 'number',
    default: 0,
    primary: false,
  })
  retries: number;
  @Column({ name: 'verified', nullable: true, default: false, primary: false })
  verified: boolean;
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
