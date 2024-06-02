//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('risk_item_add_ons')
export class risk_item_add_ons {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'risk_id', nullable: false, type: 'number', primary: false })
  risk_id: number;
  @Column({
    name: 'add_on_code',
    nullable: false,
    type: 'number',
    primary: false,
  })
  add_on_code: number;
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
}
