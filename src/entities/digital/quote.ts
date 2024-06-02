//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('quote')
export class quote {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({
    name: 'reference_number',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  reference_number: string;
  @Column({ name: 'id_type', nullable: false, type: 'number', primary: false })
  id_type: number;
  @Column({ name: 'id_no', nullable: false, type: 'varchar2', primary: false })
  id_no: string;
  @Column({ name: 'lob_id', nullable: false, type: 'number', primary: false })
  lob_id: number;
  @Column({
    name: 'customer_type_id',
    nullable: false,
    type: 'number',
    primary: false,
  })
  customer_type_id: number;
  @Column({
    name: 'status_id',
    nullable: false,
    type: 'number',
    primary: false,
  })
  status_id: number;
  @Column({
    name: 'tenant_id',
    nullable: true,
    precision: 10,
    scale: 0,
    type: 'number',
    primary: false,
  })
  tenant_id: number;
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
    name: 'company_name',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  company_name: string;
  @Column({
    name: 'phone_country_code',
    nullable: true,
    type: 'varchar2',
    default: '+966',
    primary: false,
  })
  phone_country_code: string;
  @Column({
    name: 'phone_no',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  phone_no: string;
  @Column({
    name: 'email_id',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  email_id: string;
  @Column({
    name: 'created_by',
    nullable: true,
    precision: 10,
    scale: 0,
    type: 'number',
    primary: false,
  })
  created_by: number;
  @Column({
    name: 'updated_by',
    nullable: true,
    precision: 10,
    scale: 0,
    type: 'number',
    primary: false,
  })
  updated_by: number;
  @Column({
    name: 'owned_by',
    nullable: true,
    precision: 10,
    scale: 0,
    type: 'number',
    primary: false,
  })
  owned_by: number;
  @Column({
    name: 'premium',
    nullable: true,
    precision: 10,
    scale: 2,
    type: 'number',
    primary: false,
  })
  premium: number;
  @Column({
    name: 'region_id',
    nullable: true,
    precision: 10,
    scale: 0,
    type: 'number',
    primary: false,
  })
  region_id: number;
  @Column({
    name: 'branch_id',
    nullable: true,
    precision: 10,
    scale: 0,
    type: 'number',
    primary: false,
  })
  branch_id: number;
  @Column({
    name: 'business_channel',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  business_channel: string;
  @Column({
    name: 'agent_type',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  agent_type: string;
  @Column({
    name: 'addl_details',
    nullable: true,
    type: 'clob',
    default: '{}',
    primary: false,
  })
  addl_details: string;
  @Column({
    name: 'premium_details',
    nullable: true,
    type: 'clob',
    default: '{}',
    primary: false,
  })
  premium_details: string;
  @Column({
    name: 'eska_details',
    nullable: true,
    type: 'clob',
    default: '{}',
    primary: false,
  })
  eska_details: string;
  @Column({
    name: 'is_renewal',
    nullable: true,
    default: false,
    primary: false,
  })
  is_renewal: boolean;
  @Column({
    name: 'old_policy_id',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  old_policy_id: string;
  @Column({
    name: 'old_policy_number',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  old_policy_number: string;
  @Column({ name: 'is_eska_renewal', nullable: true, primary: false })
  is_eska_renewal: boolean;
  @Column({ name: 'is_ifoundry_renewal', nullable: true, primary: false })
  is_ifoundry_renewal: boolean;
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
