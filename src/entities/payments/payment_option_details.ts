//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('payment_option_details')
export class payment_option_details {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({
    name: 'payment_master_id',
    nullable: false,
    precision: 10,
    scale: 0,
    type: 'number',
    primary: false,
  })
  payment_master_id: number;
  @Column({
    name: 'payment_type',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  payment_type: string;
  @Column({
    name: 'device_type',
    nullable: true,
    type: 'varchar2',
    primary: false,
  })
  device_type: string;
  @Column({
    name: 'image_path',
    nullable: true,
    type: 'clob',
    default: '{}',
    primary: false,
  })
  image_path: string;
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
}
