//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('risk_item_driver')
export class risk_item_driver {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'risk_id', nullable: false, type: 'number', primary: false })
  risk_id: number;
  @Column({
    name: 'driver_id',
    nullable: false,
    type: 'number',
    primary: false,
  })
  driver_id: number;
}
