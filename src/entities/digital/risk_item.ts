//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('risk_item')
export class risk_item {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'id_type', nullable: false, type: 'number', primary: false })
  id_type: number;
  @Column({ name: 'id_no', nullable: false, type: 'number', primary: false })
  id_no: number;
  @Column({ name: 'quote_id', nullable: false, type: 'number', primary: false })
  quote_id: number;
  @Column({
    name: 'product_code',
    nullable: true,
    type: 'number',
    primary: false,
  })
  product_code: number;
  @Column({
    name: 'addl_details',
    nullable: true,
    type: 'clob',
    default: '{}',
    primary: false,
  })
  addl_details: string;
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
    name: 'premium_details',
    nullable: true,
    type: 'clob',
    default: '{}',
    primary: false,
  })
  premium_details: string;
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
