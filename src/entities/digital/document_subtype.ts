//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('document_subtype')
export class document_subtype {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({
    name: 'subtype_code',
    nullable: false,
    type: 'varchar2',
    primary: false,
  })
  subtype_code: string;
  @Column({
    name: 'locale_id',
    nullable: false,
    type: 'number',
    primary: false,
  })
  locale_id: number;
}
