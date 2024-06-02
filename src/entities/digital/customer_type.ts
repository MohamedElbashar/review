//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('customer_type')
export class customer_type {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'code', nullable: false, type: 'varchar2', primary: false })
  code: string;
  @Column({
    name: 'locale_id',
    nullable: false,
    type: 'number',
    primary: false,
  })
  locale_id: number;
}
