//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('permission')
export class permission {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'code', nullable: false, type: 'varchar2', primary: false })
  code: string;
}
