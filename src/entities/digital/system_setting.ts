//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('system_setting')
export class system_setting {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'code', nullable: false, type: 'varchar2', primary: false })
  code: string;
  @Column({ name: 'value', nullable: false, type: 'varchar2', primary: false })
  value: string;
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
