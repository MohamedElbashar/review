//append_imports_start

import { PrimaryColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('identity_type')
export class identity_type {
  @PrimaryColumn({ name: 'id' })
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
