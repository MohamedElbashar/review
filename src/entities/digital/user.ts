//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('user')
export class user {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({
    name: 'username',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  username: string;
  @Column({
    name: 'first_name',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  first_name: string;
  @Column({
    name: 'last_name',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  last_name: string;
  @Column({
    name: 'email_id',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  email_id: string;
  @Column({
    name: 'phone_no',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  phone_no: string;
  @Column({
    name: 'phone_country_code',
    nullable: false,
    type: 'varchar2',
    default: '+966',
    primary: false,
  })
  phone_country_code: string;
  @Column({
    name: 'is_super_admin',
    nullable: true,
    default: false,
    primary: false,
  })
  is_super_admin: boolean;
  @Column({
    name: 'is_tenant_admin',
    nullable: true,
    default: false,
    primary: false,
  })
  is_tenant_admin: boolean;
  @Column({ name: 'is_active', nullable: true, default: true, primary: false })
  is_active: boolean;
  @Column({
    name: 'tenant_id',
    nullable: true,
    precision: 10,
    scale: 0,
    type: 'number',
    primary: false,
  })
  tenant_id: number;
  @Column({ name: 'role_id', nullable: true, type: 'number', primary: false })
  role_id: number;
  @Column({
    name: 'managed_by',
    nullable: true,
    type: 'number',
    primary: false,
  })
  managed_by: number;
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
