//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('payment_option_master')
export class payment_option_master {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({
    name: 'product_type',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  product_type: string;
  @Column({
    name: 'channel_code',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  channel_code: string;
}
